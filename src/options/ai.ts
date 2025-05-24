import type { AssistantOptions } from '@/types'

export const defaultAiOptions: {
  assistant: AssistantOptions
} = {
  assistant: {
    enabled: false,
    maxlength: 100,
    commands: [
      {
        label: { en_US: 'Continuation', zh_CN: '续写', ru_RU: 'Продолжение', es_ES: 'Continuación' },
        value: { en_US: 'Continuation', zh_CN: '续写', ru_RU: 'Продолжение', es_ES: 'Continuación' },
      },
      {
        label: { en_US: 'Rewrite', zh_CN: '重写', ru_RU: 'Переписать', es_ES: 'Reescribir' },
        value: { en_US: 'Rewrite', zh_CN: '重写', ru_RU: 'Переписать', es_ES: 'Reescribir' },
      },
      {
        label: { en_US: 'Abbreviation', zh_CN: '缩写', ru_RU: 'Аббревиатура', es_ES: 'Abreviatura' },
        value: { en_US: 'Abbreviation', zh_CN: '缩写', ru_RU: 'Аббревиатура', es_ES: 'Abreviatura' },
      },
      {
        label: { en_US: 'Expansion', zh_CN: '扩写', ru_RU: 'Расширение', es_ES: 'Expansión' },
        value: { en_US: 'Expansion', zh_CN: '扩写', ru_RU: 'Расширение', es_ES: 'Expansión'},
      },
      {
        label: { en_US: 'Polish', zh_CN: '润色', ru_RU: 'Полировать', es_ES: 'Polaco' },
        value: { en_US: 'Polish', zh_CN: '润色', ru_RU: 'Полировать', es_ES: 'Polaco' },
      },
      {
        label: { en_US: 'Proofread', zh_CN: '校阅', ru_RU: 'Корректура', es_ES: 'Corregir' },
        value: { en_US: 'Proofread', zh_CN: '校阅', ru_RU: 'Корректура', es_ES: 'Corregir' },
      },
      {
        label: { en_US: 'Translate', zh_CN: '翻译', ru_RU: 'Перевести', es_ES: 'Traducir' },
        value: {
          en_US: 'Translate to chinese',
          zh_CN: '翻译成英文',
          ru_RU: 'Перевести на китайский',
          es_ES: 'Traducir al chino',
        },
        autoSend: false,
      },
    ],
    async onMessage() {
      return await new Promise((_, reject) => {
        reject(
          new Error(
            'Key "ai": Key "assistant": Key "onMessage": Please set the onMessage method',
          ),
        )
      })
    },
  },
}
