//Intl.NumberFormat is a built-in JavaScript object that provides a way to format numbers according to the locale 
//and formatting options specified. It is a part of the ECMAScript Internationalization API which provides internationalization features 
//such as formatting dates, times, numbers, and currencies.

const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "THB", style:"currency"
})

export default function formatCurrency (number: number) {
    return CURRENCY_FORMATTER.format(number)
}