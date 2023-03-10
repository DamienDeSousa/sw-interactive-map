import { IRegion, Region } from './region.models'
import { Document, model, modelNames, Schema } from 'mongoose'

export interface IGalaxy extends Document {
  _id?: string
  name: string
  regions: IRegion
}
const galaxySchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    regions: [Region],
  },
  { collection: 'Galaxies' },
)

export const Galaxy = modelNames().includes('Galaxy')
  ? model<IGalaxy>('Galaxy')
  : model<IGalaxy>('Galaxy', galaxySchema)
