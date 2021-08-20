import './kanban-board.scss'
import { ListCardService } from './services/listCard.service'
import { isNullOrUndefined } from '@uirouter/core'
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';


class KanbanBoardController { 
  private columns: any
  private cards:any

  
  constructor(
    public listCardService: ListCardService
  ) {}
  
  async $onInit() {
    this.columns = await this.listCardService.getListCard().then((resp) => resp.data)

    
  }
}

KanbanBoardController['$inject'] = [
  'listCardService'
]

export { KanbanBoardController }