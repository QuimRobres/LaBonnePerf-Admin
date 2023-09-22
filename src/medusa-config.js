import Medusa from "@medusajs/medusa-js";

const medusa = new Medusa({
   maxRetries: 3,
   baseUrl: "https://labonneperf.siriondev.com/api",
});

export default medusa;
