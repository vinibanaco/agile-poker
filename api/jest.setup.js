'use strict';

expect.extend({
  toHaveBeenSent(received) {
    const expressResponseSendMethods = [
      'download',
      'end',
      'json',
      'jsonp',
      'redirect',
      'render',
      'send',
      'sendFile',
      'sendStatus',
    ];

    expressResponseSendMethods.forEach((method) => {
      if (this.isNot) {
        // eslint-disable-next-line security/detect-object-injection
        expect(received[method]).not.toHaveBeenCalled();
      } else {
        // eslint-disable-next-line security/detect-object-injection
        expect(received[method]).toHaveBeenCalled();
      }
    });
    return { pass: !this.isNot };
  },
});
