/* ========================================
   COMMERCE PAGES SCRIPTS
   ======================================== */

const formatCurrency = (value) =>
  new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR' }).format(
    Number.isFinite(value) ? value : 0
  );

document.addEventListener('DOMContentLoaded', () => {
  if (document.body.classList.contains('page-cart')) {
    initCart();
  }

  if (document.body.classList.contains('page-checkout')) {
    initCheckout();
  }
});

function initCart() {
  const cartSummary = document.querySelector('[data-cart-summary]');
  if (!cartSummary) return;

  const TAX_RATE = parseFloat(cartSummary.dataset.taxRate || '0');
  const shipping = parseFloat(cartSummary.dataset.shipping || '0');
  const emptyMessage = document.querySelector('.cart-empty');

  const updateSummary = () => {
    const items = Array.from(document.querySelectorAll('.cart-item'));
    const subtotal = items.reduce((total, item) => {
      const unit = parseFloat(item.dataset.price || '0');
      const qty = parseInt(item.dataset.quantity || '0', 10);
      return total + unit * qty;
    }, 0);

    const vat = subtotal * TAX_RATE;
    const total = subtotal + vat + (items.length ? shipping : 0);

    const subtotalEl = cartSummary.querySelector('[data-summary-subtotal]');
    const vatEl = cartSummary.querySelector('[data-summary-tax]');
    const shippingEl = cartSummary.querySelector('[data-summary-shipping]');
    const totalEl = cartSummary.querySelector('[data-summary-total]');

    if (subtotalEl) subtotalEl.textContent = formatCurrency(subtotal);
    if (vatEl) vatEl.textContent = formatCurrency(vat);
    if (shippingEl)
      shippingEl.textContent = items.length ? formatCurrency(shipping) : formatCurrency(0);
    if (totalEl) totalEl.textContent = formatCurrency(total);

    if (emptyMessage) {
      emptyMessage.hidden = items.length !== 0;
    }
  };

  const bindQuantityControls = () => {
    document.querySelectorAll('.cart-item').forEach((item) => {
      const control = item.querySelector('.quantity-control');
      if (!control) return;

      const input = control.querySelector('input');

      const refreshLine = () => {
        let quantity = parseInt(input.value || '1', 10);
        if (Number.isNaN(quantity) || quantity < 1) quantity = 1;
        if (quantity > 10) quantity = 10;
        input.value = quantity;
        item.dataset.quantity = quantity;

        const unitPrice = parseFloat(item.dataset.price || '0');
        const totalEl = item.querySelector('[data-item-total]');
        if (totalEl) totalEl.textContent = formatCurrency(unitPrice * quantity);

        updateSummary();
      };

      control.querySelectorAll('button[data-action]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const action = btn.dataset.action;
          let quantity = parseInt(input.value || '1', 10);
          quantity = Number.isNaN(quantity) ? 1 : quantity;
          quantity += action === 'plus' ? 1 : -1;
          input.value = quantity;
          refreshLine();
        });
      });

      input.addEventListener('change', refreshLine);
      refreshLine();
    });
  };

  const bindRemoval = () => {
    document.querySelectorAll('.cart-item__remove').forEach((button) => {
      button.addEventListener('click', () => {
        const item = button.closest('.cart-item');
        if (!item) return;
        item.remove();
        updateSummary();
      });
    });
  };

  bindQuantityControls();
  bindRemoval();
  updateSummary();
}

function initCheckout() {
  const checkoutSummary = document.querySelector('[data-checkout-summary]');
  if (checkoutSummary) {
    const subtotal = parseFloat(checkoutSummary.dataset.subtotal || '0');
    const taxRate = parseFloat(checkoutSummary.dataset.taxRate || '0');
    const shipping = parseFloat(checkoutSummary.dataset.shipping || '0');

    const vat = subtotal * taxRate;
    const total = subtotal + vat + shipping;

    const subtotalEl = checkoutSummary.querySelector('[data-summary-subtotal]');
    const vatEl = checkoutSummary.querySelector('[data-summary-tax]');
    const shippingEl = checkoutSummary.querySelector('[data-summary-shipping]');
    const totalEl = checkoutSummary.querySelector('[data-summary-total]');

    if (subtotalEl) subtotalEl.textContent = formatCurrency(subtotal);
    if (vatEl) vatEl.textContent = formatCurrency(vat);
    if (shippingEl) shippingEl.textContent = formatCurrency(shipping);
    if (totalEl) totalEl.textContent = formatCurrency(total);

    checkoutSummary.querySelectorAll('[data-order-line]').forEach((line) => {
      const value = parseFloat(line.dataset.orderLine || '0');
      line.textContent = formatCurrency(value);
    });
  }

  const form = document.getElementById('checkout-form');
  const success = document.getElementById('checkout-success');

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      form.reset();
      if (success) {
        success.style.display = 'block';
        success.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  }
}
