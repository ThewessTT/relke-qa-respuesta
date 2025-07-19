import { test, expect } from '@playwright/test';

test('Crear Nota de Venta con datos mínimos en relBase', async ({ page }) => {
  await page.goto('https://demo.relbase.cl');
  await page.getByPlaceholder('Correo Electrónico').fill('qa_junior@relke.cl');
  await page.getByPlaceholder('Contraseña').fill('Demo123456!');
  await page.getByRole('button', { name: 'Iniciar sesión' }).click();

  await page.getByRole('link', { name: 'Ventas ' }).click();
  await page.getByRole('link', { name: 'Notas de venta' }).click();

  await page.click('#btn-new-invoice');
  await page.click('text=Nota de venta');

  await expect(page.locator('text=NUEVA NOTA DE VENTA')).toBeVisible();

  await page.getByTitle('Casa matriz').click();
  await page.getByRole('treeitem', { name: 'Casa matriz' }).click();

  await page.locator('#select2-sales_note_type_document_sii-container').click();
  await page.getByRole('treeitem', { name: 'FACTURA ELECTRÓNICA' }).click();

  await page.locator('#select2-sales_note_ware_house_id-container').click();
  await page.getByRole('treeitem', { name: 'Bodega principal' }).click();

  await page.locator('#select2-sales_note_customer_id-container').click();
  await page.locator('input[type="search"]').fill('CRISTAL'); // Ajusta si cambia el nombre
  await page.getByRole('treeitem', { name: '[90331000-6] CRISTAL CHILE' }).click();

  await page.getByTitle('Pesos').click();
  await page.getByRole('treeitem', { name: 'Pesos' }).click();

  await page.locator('#select2-sales_note_e_document_products_attributes_0_product_id-container').click();
  await page.locator('input[type="search"]').fill('Caja'); // Ajusta si cambia el nombre
  await page.getByRole('treeitem', { name: '[O-CD-558291] Caja de tomates' }).click();

  await page.locator('#sales_note_e_document_products_attributes_0_quantity').click();
  await page.locator('#sales_note_e_document_products_attributes_0_quantity').fill('2'); // Ajusta si cambia la cantidad
  

  const netoText = await page.locator('#sales_note_e_document_products_attributes_0_neto').innerText();
  
  await page.getByRole('button', { name: ' Enviar' }).click();
  
});
