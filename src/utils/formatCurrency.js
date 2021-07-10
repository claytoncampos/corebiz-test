export default function formatCurrency(price) {
  return Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format(price / 100);
}
