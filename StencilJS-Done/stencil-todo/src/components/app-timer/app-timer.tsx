import { Component, h, State, Host } from '@stencil/core';

@Component ({
    tag: 'app-timer',
    styleUrl: 'app-timer.scss'
})

export class AppTimer {
    timer: number;

    @State() time: number = Date.now();
    @State() open: boolean = false;

    componentDidLoad() {
        this.timer = window.setInterval(() => {
            this.time = Date.now();
        }, 1000);
    }

    componentDidUnload() {
        window.clearInterval(this.timer);
    }

    render () {
        const time = new Date(this.time).toLocaleTimeString();
        return <Host
                aria-hidden={!this.open}
                class={{
                    'timer': true,
                    'is-open': this.open
                }}>
                    <b>Clock: {time}</b>
                </Host>
                ;
    }
}