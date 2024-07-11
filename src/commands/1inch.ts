import { Telegraf, Context } from 'telegraf'
import { strings } from '@helpers/strings'
import { checkLock } from '@middlewares/checkLock'
import { clarifyIfPrivateMessages } from '@helpers/clarifyIfPrivateMessages'

export function setup1inchInfo(bot: Telegraf<Context>) {
  bot.command(['surge'], sendInfo)
}

export function sendInfo(ctx: Context) {
  if (ctx.update.message?.date) {
    console.log(
      'Replying to Surge',
      Date.now() / 1000 - ctx.update.message?.date
    )
  }

  const aboutOneInch = strings(ctx.dbchat, 'surgeInfo');
  const link =
      '[Surge Build](http://surge.build/?utm_source=shieldy_en)';

  return ctx.replyWithMarkdown(`${aboutOneInch}\n\n${link}`, {
    disable_web_page_preview: false,
  })
}
