import { openApiErrorResponses } from "@/lib/openapi/responses";
import z from "@/lib/zod";
import { trackSaleRequestSchema } from "@/lib/zod/schemas/sales";
import { ZodOpenApiOperationObject } from "zod-openapi";

export const trackSale: ZodOpenApiOperationObject = {
  operationId: "trackSale",
  "x-speakeasy-name-override": "sale",
  summary: "Track a sale.",
  description: "Track a sale for a short link.",
  requestBody: {
    content: {
      "application/json": {
        schema: trackSaleRequestSchema,
      },
    },
  },
  responses: {
    "200": {
      description: "A sale was tracked.",
      content: {
        "application/json": {
          schema: z.object({
            success: z.literal(true),
          }),
        },
      },
    },
    ...openApiErrorResponses,
  },
  tags: ["Track"],
  security: [{ token: [] }],
};
