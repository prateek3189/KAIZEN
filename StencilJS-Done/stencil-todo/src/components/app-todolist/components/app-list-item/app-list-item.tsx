import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component ({
    tag: 'app-list-item',
    styleUrl: 'app-list-item.scss'
})

export class AppListItem {
    @Prop() itemId:any;
    @Prop() itemName:any;
    @Prop() completed:any;

    @Event() todoCompleted: EventEmitter;
    
    render () {
        return (<li>
                    <span>
                        {!this.completed ? 
                            <a href="javascript:void(0)" onClick={()=> {this.onTaskcomplete(this.itemId)}}>Complete</a> : 
                            <strike>Complete</strike>}
                            {this.completed ? 
                            <b>&nbsp;</b> : 
                            null}
                        {this.itemName}
                    </span>
                    <span>
                        <stencil-route-link url={"/details/" + this.itemId}>
                            <a href="javascript:void(0)">Edit</a>
                        </stencil-route-link>
                    </span>
                </li>);
    }

    onTaskcomplete(itemId: any) {
        this.todoCompleted.emit(itemId);
    }
}