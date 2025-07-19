# Relke QA Challenge - Automatización con Playwright

## ✅ Instrucciones para ejecutar los tests

### Requisitos previos
- Node.js instalado (v16 o superior recomendado)
- npm instalado
- Playwright instalado:

```bash
npm install
npx playwright install

⚙️ Tecnologías utilizadas
Lenguaje: TypeScript

Framework: Playwright

Ejecución: Node.js

Reportes: Playwright HTML Reporter

## 🔍 Validaciones realizadas
Login exitoso con usuario demo.

Navegación a Ventas > Notas de Venta.

Creación de una nueva Nota de Venta, incluyendo:

Selección de:

Sucursal: Casa matriz

Bodega: Principal

Cliente: primer cliente disponible

Moneda: Pesos

Agregado de al menos un producto.

Validación de que el total se calcula y es mayor a 0.

Guardar la Nota de Venta.


⚠️ Desafíos enfrentados
Interacción con dropdowns no estándar: algunos select como Sucursal, Bodega, Cliente, y Moneda no son HTML <select>. Utilicé interacciones con getByRole y localizadores robustos.

Ambiente demo dinámico: el cliente, productos y totales pueden cambiar por el entorno compartido. El test es dinámico para siempre seleccionar el primer cliente y primer producto disponible.

Sin API pública: no fue posible automatizar la creación de datos por API, lo que obliga a trabajar con datos UI disponibles.


