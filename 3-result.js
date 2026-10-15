console.log(ff(7))

function ff(n) {
  if (n == 1) return 1
  if (n % 2 == 0) return ff(n / 2)
  return ff((n - 1) / 2) + ff((n + 1) / 2)
}
