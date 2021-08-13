import './column-frame.scss'
import template from './column-frame.html'

class ColumnFrameController {
    constructor () {}
}

const columnFrame = {
    controller: ColumnFrameController,
    templateUrl: template
}

ColumnFrameController['$inject'] = []

export { columnFrame }