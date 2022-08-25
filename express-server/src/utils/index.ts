import path from "path";

export function getRoot() {
  return path.dirname(path.dirname(__dirname));
}

export function makePath(...segments: string[]) {
  return path.join(getRoot(), ...segments);
}
