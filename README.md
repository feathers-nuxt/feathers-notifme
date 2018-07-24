# feathers-notifme

> Feathers notification service using [`notifme-sdk`](https://github.com/notifme/notifme-sdk)

## Installation

```shell
npm install @feathers-nuxt/feathers-notifme --save
```

## API

```js
const notifme = require('feathers-notifme');
```

### `app.use('/notifications', notifme(options))`

`options` is an object with two optional keys
- useNotificationCatcher: optional boolean. `false` by default.
- channels: optional object. One of `email`, `sms`, `push`, `webpush` or `slack`
	Each channel configuration is an object with two keys:
	  - multiProviderStrategy: *optional string*; one of `fallback`, `roundrobin`, `no-fallback`
	  - providers: *required array* of objects each with a required key `type`

See [here](https://github.com/notifme/notifme-sdk#1-general-options) for more details.

## Example
The below example is in livescript.

```livescript
notifme = require 'feathers-notifme'
# declare notifme-sdk options
options = 
    useNotificationCatcher: false
    channels: 
      email:
        providers:
          * type: 'logger'
          * type: 'smtp',
            port: 465,
            secure: true,
            host: (app.get 'SMTP_HOST'),
            auth: user: (app.get 'SMTP_USER'), pass: (app.get 'SMTP_PASSWORD')
        ...
# register the service with the options
app.use '/notifications', notifme options 

# use the service to send email notification
alert =
  email:
    subject: 'Test Email Notification'
    from: app.get 'SMTP_USER'
    to: email@address.me
    html: 'Hello world!'
(app.service 'notifications').create alert
```


## License

Copyright (c) 2018

Licensed under the [MIT license](LICENSE).