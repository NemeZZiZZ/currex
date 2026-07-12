export function getCurrencyName(code: string, locale: string = 'ru-RU'): string {
  try {
    const displayNames = new Intl.DisplayNames([locale], { type: 'currency' })
    return displayNames.of(code) ?? code
  } catch {
    return code
  }
}
