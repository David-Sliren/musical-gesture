const formatTime = (second) => {
  if (isNaN(second)) return "00:00";

  const minutos = Math.floor(second / 60);
  const segRestantes = Math.floor(second % 60);

  // Usamos padStart para que siempre tenga dos dígitos (ej. 05 en lugar de 5)
  const mm = String(minutos).padStart(2, "0");
  const ss = String(segRestantes).padStart(2, "0");

  return `${mm}:${ss}`;
};
