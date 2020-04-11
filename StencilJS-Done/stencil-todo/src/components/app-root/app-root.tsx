import { Component, h, Host } from '@stencil/core';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss'
})
export class AppRoot {

  render() {
    const Hello = (props: any) => <span class="user-info">Hello, {props.name}!</span>;

    return (
      <Host>
        <header>
          <h1>To Do's...</h1>
          {/* <app-timer></app-timer> */}
          <Hello name="User"></Hello>
        </header>
        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='app-todolist' exact={true} />
              <stencil-route url='/details/:id' component='app-details' />
            </stencil-route-switch>
          </stencil-router>
        </main>
        <footer>To Maintain your to do list...</footer>
      </Host>
    );
  }
}
