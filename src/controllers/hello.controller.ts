import {get} from '@loopback/rest';

export class HelloController {
  @get('/hello')
  hello(): string {
    // Reply with a greeting, the current time, the url, and request headers
    return 'Hello from Jeff!';
  }
}
