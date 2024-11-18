export function classNames(...args: unknown[]) {
  return args.filter(Boolean).join(' ');
}