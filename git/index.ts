import type {Values as ValuesCreateMetaFor} from "create-metafor"
import { MetaFor } from "create-metafor"
import Meta from "./meta.ts"

export type Values = ValuesCreateMetaFor<typeof Meta["fields"]>