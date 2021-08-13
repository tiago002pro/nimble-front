import './column-frame.scss'
import template from './column-frame.html'

class ColumnFrameController {
    private title: String
    private column: any

    constructor () {
    }

    $onInit() {
        console.log("init");
        
        console.log(this.title);
        
    }
}

const columnFrame = {
    bindings: {
        title: '=?',
        column: '=?'

    },
    controller: ColumnFrameController,
    templateUrl: template
}

ColumnFrameController['$inject'] = []

export { columnFrame }