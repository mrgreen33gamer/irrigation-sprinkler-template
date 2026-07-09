/**
 * AquaArc Irrigation — bulk identity rebrand + content rewrite helper.
 * Run from template root: node scripts/rebrand-irrigation.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const SKIP = new Set(['node_modules', '.next', '.git', 'COMBINE_FILES_SERVICE', 'GeoLite2-City.mmdb']);
const EXT = new Set(['.ts', '.tsx', '.scss', '.css', '.js', '.jsx', '.json', '.md', '.txt', '.xml', '.webmanifest']);

function walk(dir, out = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP.has(ent.name)) continue;
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, out);
    else if (EXT.has(path.extname(ent.name))) out.push(p);
  }
  return out;
}

const pairs = [
  // Brand
  [/Arctic Air HVAC/g, 'AquaArc Irrigation'],
  [/Arctic Air Heating & Cooling/g, 'AquaArc Irrigation'],
  [/Arctic Air/g, 'AquaArc'],
  [/arcticairhvac\.com/g, 'aquaarcirrigation.com'],
  [/arcticairhvac/g, 'aquaarcirrigation'],
  [/contact@aquaarcirrigation\.com/g, 'hello@aquaarcirrigation.com'],
  [/arctic-air-banner\.png/g, 'scott-apps-banner.png'],
  // People / place
  [/Mike Hawkins/g, 'Seth Moreno'],
  [/4521 Bosque Blvd/g, '900 S University Parks Dr'],
  [/Waco, TX 76710/g, 'Waco, TX 76706'],
  [/postalCode:\s*"76710"/g, 'postalCode: "76706"'],
  [/founded in 2010/gi, 'founded in 2012'],
  [/Founded in 2010/g, 'Founded in 2012'],
  [/Since 2010/g, 'Since 2012'],
  [/foundingDate:\s*"2010"/g, 'foundingDate: "2012"'],
  [/Serving Central Texas Since 2010/g, 'Serving Central Texas Since 2012'],
  // Phone
  [/\(254\) 900-1234/g, '(254) 990-2020'],
  [/\+12549001234/g, '+12549902020'],
  [/254-900-1234/g, '254-990-2020'],
  // Accent
  [/#f97316/gi, '#0284c7'],
  [/#fb923c/gi, '#38bdf8'],
  [/#c2410c/gi, '#0369a1'],
  // Credentials / guarantees
  [/NATE Certified/g, 'Licensed Irrigator'],
  [/NATE-certified/g, 'licensed irrigator'],
  [/NATE · TDLR/g, 'Licensed · Bonded'],
  [/NATE certified/g, 'licensed irrigator'],
  [/TDLR-licensed/g, 'licensed'],
  [/TDLR License #XXXXXXXX/g, 'Licensed Irrigator · Bonded & Insured'],
  [/Master HVAC Technician/g, 'Owner & Licensed Irrigator'],
  [/1-Year Labor Warranty/g, 'Green Lawn Guarantee · 2-Year Parts'],
  [/1-Year Warranty/g, 'Green Lawn Guarantee'],
  [/1-Yr Warranty/g, 'Green Lawn Guarantee'],
  [/1-year warranty/g, 'Green Lawn Guarantee'],
  // HVAC generic → irrigation (careful ordered pairs)
  [/"@type": "HVACBusiness"/g, '"@type": "HomeAndConstructionBusiness"'],
  [/HVAC company/g, 'irrigation company'],
  [/HVAC contractor/g, 'irrigation contractor'],
  [/HVAC companies/g, 'irrigation companies'],
  [/HVAC service/g, 'irrigation service'],
  [/HVAC technicians/g, 'irrigation technicians'],
  [/HVAC technician/g, 'irrigation technician'],
  [/HVAC Services/g, 'Irrigation Services'],
  [/HVAC Tips/g, 'Irrigation Tips'],
  [/HVAC Articles/g, 'Irrigation Articles'],
  [/HVAC Experts/g, 'Irrigation Experts'],
  [/HVAC business/g, 'irrigation business'],
  [/HVAC/g, 'irrigation'],
  [/heating and cooling company/g, 'irrigation company'],
  [/heating and cooling/g, 'sprinkler and drip irrigation'],
  [/Air Conditioning & Heating/g, 'Sprinklers & Drip Irrigation'],
  [/Heating & Cooling/g, 'Irrigation & Sprinklers'],
  // Service slug path leftovers
  [/\/services\/ac-repair/g, '/services/sprinkler-install'],
  [/\/services\/heating/g, '/services/sprinkler-repair'],
  [/\/services\/installation/g, '/services/drip-irrigation'],
  [/\/services\/duct-cleaning/g, '/services/smart-controllers'],
  [/\/services\/indoor-air-quality/g, '/services/winterization'],
  [/\/services\/maintenance/g, '/services/seasonal-tuneups'],
  [/\/industries\/automotive/g, '/industries/hoa-communities'],
  [/\/industries\/manufacturing/g, '/industries/commercial-properties'],
  [/\/industries\/oil-gas/g, '/industries/sports-fields'],
  // Package name
  [/"name":\s*"hvac-template"/g, '"name": "irrigation-sprinkler-template"'],
  [/hvac-pro-template/g, 'irrigation-sprinkler-template'],
  [/hvac-template/g, 'irrigation-sprinkler-template'],
];

let changed = 0;
for (const file of walk(ROOT)) {
  let text = fs.readFileSync(file, 'utf8');
  let next = text;
  for (const [re, rep] of pairs) next = next.replace(re, rep);
  if (next !== text) {
    fs.writeFileSync(file, next, 'utf8');
    changed++;
    console.log('updated', path.relative(ROOT, file));
  }
}
console.log(`\nDone. ${changed} files updated.`);
