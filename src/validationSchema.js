import * as z from "zod";

export const fieldValidationSchema = z.object({
  type: z.string().min(1, "Type is required"),
  label: z.string().min(1, "Label is required"),
  options: z.array(z.string()).optional(),
});
