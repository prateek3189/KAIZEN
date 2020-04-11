import { Component, h } from '@stencil/core';

@Component ({
    tag: 'app-loader',
    styleUrl: 'app-loader.scss'
})

export class AppLoader {
    render () {
        return (<h3 class="loader">
            Loading...
        </h3>);
    }
}