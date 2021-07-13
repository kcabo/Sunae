import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

export default function CodeDialog(props: ModalProps) {
  const { isOpen, closeModal } = props;
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as='div'
        className='fixed inset-0 z-10 overflow-y-auto'
        onClose={closeModal}
      >
        <div className='min-h-screen px-4 text-center'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0' />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className='inline-block h-screen align-middle'
            aria-hidden='true'
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <div className='inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl'>
              <Dialog.Title
                as='h3'
                className='text-lg font-medium leading-6 text-gray-900'
              >
                Output Code
              </Dialog.Title>
              <div className='mt-2'>
                <p className='text-sm text-gray-500 text-left break-all'>
                  data:text/html, &lt;head&gt;&lt;meta
                  charset="UTF-8"&gt;&lt;title&gt;メモ&lt;/title&gt;&lt;style&gt;
                  body {'{'} background-color:%23282C34; color:white;
                  line-height: 2; padding: 20px; font-family: sans-serif; {'}'}{' '}
                  &lt;/style&gt;&lt;link rel="icon"
                  href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB1UlEQVQ4T5XTS0gbQRgH8P83s6ti26Ai9SRUE4rP4EmlJyHxYhUptmlBvSp4EQ8efB0UFCkUacFDpMfiY8GL+CiaPg5tMRVKiHhQox68BJFUNAEfuxnZojGbjZrOZdjh+/9mhm+WkMLYL62xnTNpCoR8ATFi83/5cB2jFPII2B0KgV7FagV6rOueUf37XmA1p8piyctYS5flp4bNrpA7gZXH5YWc8zmZS6V5WRZwxhIM0WkAtkpqKpgkDQLiLHQSngufno8ByNVTMucwIyJoAAJ25w4BhXpAi0YRPDqGqmmxXc0I/Y4BAqA9uzMsgMzrRDJE4hy5jx5upsmSD5rabzjBdpmjlzEajr+oGREbmWfpz6pD3uOkXdgtdwwJooFbkENNU6tqD9Z3b30H49PzxUXff/558mstIxE5ikRaK/e8n+LXDVf4qHzO0aB6AbLZvv44TUQAzFr9npdJAUVReAgPlgioBbAFNdroGHnfQgx9cYF5q9/TkBRwKwtvAXQDWNYuxJuO5vq/emHA7uwjoFcAQc6oqcC34jMBEzMLTYKgAHiXjUiPy+W6aT4AvcX0bzIPck8vWsHENxLoanv9fDaVn8twAvfM4gDSMNn+om7nf8N6/SVJwrSForoMogAAAABJRU5ErkJggg=="&gt;&lt;/head&gt;&lt;body
                  contenteditable&gt;&lt;/body&gt;
                </p>
              </div>

              <div className='mt-4'>
                <button
                  type='button'
                  className='inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500'
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
