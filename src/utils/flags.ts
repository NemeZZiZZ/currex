/**
 * Generate an emoji flag from a currency code.
 *
 * The first two letters of an ISO 4217 currency code usually match the
 * ISO 3166-1 alpha-2 country code (USD → US, EUR → EU, GBP → GB, RUB → RU).
 * Regional indicator symbols turn two letters into an emoji flag.
 */

const REGIONAL_OFFSET = 0x1f1e6 - "A".charCodeAt(0);

// Codes where the first two letters don't match the country — manual override.
const COUNTRY_OVERRIDE: Record<string, string> = {
  EUR: "EU",
  XOF: "SN",
  XAF: "CM",
  XCD: "AG",
  XPF: "NC",
  XDR: "US",
  AWG: "AW",
  ANG: "NL",
  PGK: "PG",
  SBD: "SB",
  TTD: "TT",
};

/** Returns an emoji flag for the given currency code, or null if not possible. */
export function currencyToFlag(code: string): string | null {
  const country =
    COUNTRY_OVERRIDE[code] ?? (code.length >= 2 ? code.slice(0, 2) : null);
  if (!country || country.length !== 2) return null;

  const upper = country.toUpperCase();
  if (!/^[A-Z]{2}$/.test(upper)) return null;

  const cp1 = upper.charCodeAt(0) + REGIONAL_OFFSET;
  const cp2 = upper.charCodeAt(1) + REGIONAL_OFFSET;
  return String.fromCodePoint(cp1, cp2);
}
