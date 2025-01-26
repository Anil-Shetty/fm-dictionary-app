import { z } from 'zod'

const LicenseSchema = z.object({
  name: z.string(),
  url: z.string(),
})

const PhoneticSchema = z.object({
  text: z.string().optional(),
  audio: z.string().optional(),
  sourceUrl: z.string().optional(),
  license: LicenseSchema.optional(),
})

const DefinitionSchema = z.object({
  definition: z.string(),
  example: z.string().optional(),
  synonyms: z.array(z.string()).optional(),
  antonyms: z.array(z.string()).optional(),
})

const MeaningSchema = z.object({
  partOfSpeech: z.string(),
  definitions: z.array(DefinitionSchema),
  synonyms: z.array(z.string()).optional(),
  antonyms: z.array(z.string()).optional(),
})

const WordSchema = z.object({
  word: z.string(),
  phonetic: z.string().optional(),
  phonetics: z.array(PhoneticSchema),
  meanings: z.array(MeaningSchema),
  license: LicenseSchema,
  sourceUrls: z.array(z.string())
});

export const DictionaryApiResponseSchema = z.array(WordSchema)

export type ApiResponse = z.infer<typeof DictionaryApiResponseSchema>