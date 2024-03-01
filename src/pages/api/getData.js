import path from "path";
import {promises as fs} from "fs";

export async function getPhones() {
  const file = path.join(process.cwd(), 'public/data.json')
  const json_data = await fs.readFile(file)
  return JSON.parse(json_data)
}
export default function handler(req, res) {
  res.status(200).json(getPhones());
}
