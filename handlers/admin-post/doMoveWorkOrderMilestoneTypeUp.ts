import type { Request, Response } from 'express'

import { moveRecordUp, moveRecordUpToTop } from '../../database/moveRecord.js'
import { getWorkOrderMilestoneTypes } from '../../helpers/functions.cache.js'

export default async function handler(
  request: Request<
    unknown,
    unknown,
    { workOrderMilestoneTypeId: string; moveToEnd: '0' | '1' }
  >,
  response: Response
): Promise<void> {
  const success =
    request.body.moveToEnd === '1'
      ? await moveRecordUpToTop(
          'WorkOrderMilestoneTypes',
          request.body.workOrderMilestoneTypeId
        )
      : await moveRecordUp(
          'WorkOrderMilestoneTypes',
          request.body.workOrderMilestoneTypeId
        )

  const workOrderMilestoneTypes = await getWorkOrderMilestoneTypes()

  response.json({
    success,
    workOrderMilestoneTypes
  })
}
