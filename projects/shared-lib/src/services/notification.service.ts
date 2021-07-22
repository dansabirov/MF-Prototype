import notify from 'devextreme/ui/notify';

export class NotificationService {

  static success(position: any = { my: 'right top', at: 'right top' }, message: string, displayTime: number = 5000) {
    notify({
      displayTime: displayTime,
      type: 'custom',
      closeOnOutsideClick: true,
      closeOnClick: true,
      position: position,
      height: 'auto',
      width: 470,
      elementAttr: { class: 'success-notify' },
      contentTemplate: () => {
        return `<div class="dx-toast-message mt-4">
                            <div class="success"></div>
                            <span class="ml-8 mt-2">${message}</span>
                        </div>
                        <div class="close pointer mt-4"></div>`;
      },
    });
  }

  static error(position: any = { my: 'right top', at: 'right top' }, message: string, displayTime: number = 5000) {
    notify({
      displayTime: displayTime,
      type: 'custom',
      closeOnOutsideClick: true,
      closeOnClick: true,
      position: position,
      height: 'auto',
      width: 470,
      elementAttr: { class: 'error-notify' },
      contentTemplate: () => {
        return `<div class="dx-toast-message mt-4">
                            <div class="error"></div>
                            <span class="ml-8 mt-2">${message}</span>
                        </div>
                        <div class="close pointer mt-4"></div>`;
      },
    });
  }

  static errorDetails(position: any = { my: 'right top', at: 'right top' }, subject: string, message: string, displayTime: number = 5000) {
    notify({
      displayTime: displayTime,
      type: 'custom',
      closeOnOutsideClick: true,
      closeOnClick: false,
      position: position,
      height: 'auto',
      width: 470,
      elementAttr: { class: 'error-notify' },
      contentTemplate: () => {
        const detailsId = 'id_' + Date.now();
        const inlineClick = `const mode = document.getElementById('${detailsId}').classList.toggle('hidden');
          this.innerText = mode ? 'Show details' : 'Hide details';
        `;
        return `
                <div class="dx-toast-message mt-8 mb-8 align-flex-start">
                  <div class="error"></div>
                  <div class="flex-column ml-8 mt-2">
                    <div class="flex justify-start">
                      <div class="">Server side error occurred.</div>
                      <a class="ml-8 b-link" onClick="${inlineClick}">Show details</a>
                    </div>
                    <div class="mt-8 hidden" id="${detailsId}">
                      <div class="mt-4">${message}</div>
                      <div class="mt-4">
                        <a class="b-link" href="mailto:support@eucon.com?subject=${encodeURI(subject)}&body=${encodeURI(message)}">
                          Create support ticket
                        </a>
                      </div>
                    </div>
                </div>
              </div>
              `;
      },
    });
  }

  static info(position: any = { my: 'right top', at: 'right top' }, message: string, displayTime: number = 5000) {
    notify({
      displayTime: displayTime,
      type: 'custom',
      closeOnOutsideClick: true,
      closeOnClick: true,
      position: position,
      height: 'auto',
      width: 600,
      elementAttr: { class: 'info-notify' },
      contentTemplate: () => {
        return `<div class="dx-toast-message mt-4">
                            <div class="info"></div>
                            <span class="ml-8 mt-2">${message}</span>
                        </div>
                        <div class="close pointer mt-4"></div>`;
      },
    });
  }

  static warning(position: any = { my: 'right top', at: 'right top' }, message: string, displayTime: number = 5000) {
    notify({
      displayTime: displayTime,
      type: 'custom',
      closeOnOutsideClick: true,
      closeOnClick: true,
      position: position,
      height: 'auto',
      width: 470,
      elementAttr: { class: 'warning-notify' },
      contentTemplate: () => {
        return `<div class="dx-toast-message mt-4">
                            <div class="warning"></div>
                            <span class="ml-8 mt-2">${message}</span>
                        </div>
                        <div class="close pointer mt-4"></div>`;
      },
    });
  }

}
