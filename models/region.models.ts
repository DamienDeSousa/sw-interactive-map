import { model, modelNames, Schema } from 'mongoose'

export interface IRegion {
  name: string
}
const regionSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
  },
  { collection: 'Regions' },
)

export const Region = modelNames().includes('Region')
  ? model<IRegion>('Region')
  : model<IRegion>('Region', regionSchema)
