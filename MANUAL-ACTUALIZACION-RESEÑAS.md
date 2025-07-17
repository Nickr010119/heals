# 📋 Guía de Actualización de Reseñas - Heals Fisioterapia

## 🎯 Objetivo
Esta guía te enseña cómo mantener actualizadas las reseñas en tu página web con los comentarios reales de Google My Business.

---

## 📅 Cronograma de Actualización Recomendado

### 🟢 **SEMANAL** (Lunes, 15 minutos)
- [ ] Revisar nuevas reseñas en Google My Business
- [ ] Responder a reseñas nuevas (positivas y negativas)
- [ ] Identificar reseñas destacadas para la web

### 🟡 **MENSUAL** (Primer viernes del mes, 30 minutos)
- [ ] Actualizar reseñas en la página web
- [ ] Verificar enlaces de Google
- [ ] Revisar calificación promedio
- [ ] Actualizar estadísticas

### 🟠 **TRIMESTRAL** (Cada 3 meses, 1 hora)
- [ ] Optimizar estrategia de reseñas
- [ ] Analizar métricas de conversión
- [ ] Actualizar diseño si es necesario

---

## 🔄 PROCESO PASO A PASO

### **PASO 1: Acceder a Google My Business**

1. Ve a [Google My Business](https://business.google.com/)
2. Inicia sesión con tu cuenta de Google
3. Selecciona tu negocio "Heals Fisioterapia y Rehabilitación 💙"
4. Haz clic en "Reseñas" en el menú lateral

### **PASO 2: Identificar Reseñas Nuevas**

Busca reseñas que cumplan estos criterios:
- ⭐ **4-5 estrellas** (para mostrar en la web)
- 📝 **Texto descriptivo** (mínimo 20 palabras)
- 🎯 **Menciona servicios específicos** (fisioterapia, rehabilitación, etc.)
- 📅 **Recientes** (últimos 3 meses)

**Ejemplos de reseñas ideales:**
✅ "Excelente servicio de fisioterapia, me ayudaron con mi dolor de espalda..."
✅ "Muy profesionales, el tratamiento de rehabilitación fue efectivo..."
✅ "Recomiendo totalmente, las instalaciones están muy bien equipadas..."

❌ Evitar reseñas muy cortas: "Muy bueno", "Recomendado", "5 estrellas"

### **PASO 3: Copiar Información de la Reseña**

Para cada reseña seleccionada, anota:

```
📊 Calificación: ⭐⭐⭐⭐⭐ (5/5)
👤 Nombre: [Inicial del nombre] [Apellido] (ej: "María G.")
📝 Comentario: "[Texto completo de la reseña]"
📅 Fecha: [Mes y año]
```

**⚠️ IMPORTANTE:** Por privacidad, solo usa la inicial del nombre y primera letra del apellido.

### **PASO 4: Actualizar la Página Web**

#### 🔧 **Ubicación del Archivo**
- Archivo: `src/app/page.tsx`
- Sección: Busca el comentario `{/* Reseñas destacadas */}`
- Líneas aproximadas: 670-750

#### ✏️ **Formato de Reseña en el Código**

```tsx
{/* Reseña [NÚMERO] - [MES/AÑO] */}
<div className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-500">
  <div className="flex items-center mb-2">
    <div className="flex text-yellow-400 text-sm">
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i>
      <i className="fas fa-star"></i> {/* Ajustar según calificación */}
    </div>
    <span className="ml-2 text-sm text-gray-600">[CALIFICACIÓN]/5</span>
  </div>
  <p className="text-gray-700 text-sm mb-2 italic">"[COMENTARIO DE LA RESEÑA]"</p>
  <p className="text-xs text-gray-500 flex items-center gap-1">
    <i className="fab fa-google text-blue-500"></i>
    [NOMBRE] - Reseña verificada de Google
  </p>
</div>
```

#### 📝 **Ejemplo Práctico de Reemplazo**

**ANTES:**
```tsx
<p className="text-gray-700 text-sm mb-2 italic">"Excelente servicio de fisioterapia. El personal es muy profesional y las instalaciones están muy bien equipadas. Recomendado al 100%."</p>
<p className="text-xs text-gray-500 flex items-center gap-1">
  <i className="fab fa-google text-blue-500"></i>
  Reseña verificada de Google
</p>
```

**DESPUÉS:**
```tsx
<p className="text-gray-700 text-sm mb-2 italic">"Increíble atención personalizada para mi lesión de rodilla. Los fisioterapeutas son muy conocedores y me explicaron todo el proceso. Volvería sin dudarlo."</p>
<p className="text-xs text-gray-500 flex items-center gap-1">
  <i className="fab fa-google text-blue-500"></i>
  Carlos M. - Reseña verificada de Google
</p>
```

### **PASO 5: Ajustar Calificación Promedio**

#### 📊 **Calcular Promedio Actual**
1. En Google My Business, ve a "Estadísticas"
2. Busca la "Calificación promedio" actual
3. Redondea a 1 decimal (ej: 4.8, 4.9, 5.0)

#### 🔄 **Actualizar en la Web**
Busca esta línea en el código:
```tsx
<span className="text-sm text-gray-600">4.9/5</span>
```

Reemplaza `4.9` con tu calificación actual.

### **PASO 6: Verificar Enlaces**

#### 🔗 **Comprobar Enlaces de Google**

1. **Ver Reseñas:**
   ```
   https://www.google.com/search?q=Heals+Fisioterapia+y+Rehabilitaci%C3%B3n+%F0%9F%92%99+reseñas
   ```

2. **Escribir Reseña:**
   - Ve a tu perfil en Google Maps
   - Haz clic en "Escribir una reseña"
   - Copia la URL completa
   - Reemplaza en el código

### **PASO 7: Probar Cambios**

#### 🧪 **Lista de Verificación**
- [ ] La página carga sin errores
- [ ] Las 3 reseñas se muestran correctamente
- [ ] Las estrellas corresponden a la calificación
- [ ] Los enlaces de Google funcionan
- [ ] El diseño se ve bien en móvil
- [ ] No hay errores de ortografía

#### 💻 **Comandos para Probar**
```bash
# Correr el servidor de desarrollo
npm run dev

# Abrir en el navegador
http://localhost:3000/#contact
```

---

## 📋 PLANTILLA DE SEGUIMIENTO

### **Registro Mensual de Reseñas**

**Mes: ________________**

| Fecha | Calificación | Nombre | Comentario (Resumen) | ¿Agregada a Web? |
|-------|-------------|--------|---------------------|------------------|
|       | ⭐⭐⭐⭐⭐ |        |                     | ☐ Sí ☐ No       |
|       | ⭐⭐⭐⭐⭐ |        |                     | ☐ Sí ☐ No       |
|       | ⭐⭐⭐⭐⭐ |        |                     | ☐ Sí ☐ No       |

**Calificación Promedio Actual:** ___/5
**Total de Reseñas:** ___
**Respuestas Pendientes:** ___

---

## 🚨 CASOS ESPECIALES

### **Reseña Negativa (1-2 estrellas)**
1. **NO** la agregues a la web
2. **SÍ** responde en Google My Business
3. Ejemplo de respuesta:
   ```
   Hola [Nombre], lamentamos que tu experiencia no haya sido la esperada. 
   Nos encantaría poder mejorar. Por favor contáctanos al [teléfono] o 
   por WhatsApp para resolver cualquier inconveniente. 
   - Equipo Heals
   ```

### **Reseña sin Texto (Solo Estrellas)**
- No la agregues a la web
- Responde agradeciendo brevemente

### **Reseña Spam o Falsa**
- Repórtala en Google My Business
- No respondas
- No la agregues a la web

---

## 🎯 MEJORES PRÁCTICAS

### ✅ **SÍ Hacer:**
- Mantener máximo 3-4 reseñas en la web
- Renovar reseñas cada 2-3 meses
- Usar reseñas recientes (últimos 6 meses)
- Responder a TODAS las reseñas en Google
- Agradecer reseñas positivas
- Resolver problemas mencionados en reseñas negativas

### ❌ **NO Hacer:**
- Fabricar reseñas falsas
- Editar el contenido de las reseñas reales
- Usar nombres completos (privacidad)
- Ignorar reseñas negativas
- Agregar más de 5 reseñas a la web

---

## 📞 CONTACTO DE SOPORTE

Si tienes problemas técnicos o dudas:

**GitHub Copilot Asistente** 🤖
- Pregunta directamente en VS Code
- Menciona el archivo: `page.tsx`
- Especifica la sección: "reseñas de Google"

**Recursos Útiles:**
- [Google My Business Help](https://support.google.com/business/)
- [Guía de Reseñas de Google](https://support.google.com/business/answer/3038063)

---

## ✅ CHECKLIST RÁPIDO (2 MINUTOS)

**Para actualizaciones rápidas:**

1. [ ] ¿Hay reseñas nuevas de 4-5 estrellas?
2. [ ] ¿Alguna reseña necesita respuesta?
3. [ ] ¿La calificación promedio cambió?
4. [ ] ¿Las reseñas en la web son recientes?
5. [ ] ¿Los enlaces funcionan correctamente?

**¡Listo! Tu página web siempre tendrá las mejores reseñas actualizadas** ⭐

---

*📅 Última actualización: Julio 2025*
*🔄 Próxima revisión programada: Octubre 2025*
