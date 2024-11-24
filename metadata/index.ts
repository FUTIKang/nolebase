import type { Creator } from '../scripts/types/metadata'
import { getAvatarUrlByGithubName } from '../scripts/utils'

/** 文本 */
export const siteName = '孤南筏'
export const siteShortName = '孤南筏'
export const siteDescription = '记录回忆，知识和畅想的地方'

/** 文档所在目录 */
export const include = ['笔记', '生活']

/** Repo */
export const githubRepoLink = 'https://github.com/FUTIKang/nolebase-template'
/** Discord */
export const discordLink = 'https://discord.gg/'

/** 无协议前缀域名 */
export const plainTargetDomain = 'notebook.futikang.space'
/** 完整域名 */
export const targetDomain = `https://${plainTargetDomain}`

/** 创作者 */
export const creators: Creator[] = [
  {
    name: 'GU_Nanfa',
    avatar: '',
        username: 'FUTIKang',
    title: 'GNF-Social 原始创作者',
    desc: '全栈开发工程师, JAVA后端开发 & React前端开发',
    links: [
      { type: 'github', icon: 'github', link: 'https://github.com/FUTIKang' },
    //   { type: 'twitter', icon: 'twitter', link: 'https://twitter.com/ayakaneko' },
    ],
    nameAliases: ['gunanfa', '孤南筏', '孤南筏', 'GU_Nanfa', 'GNF-Social'],
    emailAliases: ['2760373022@qq.com'],
  },
  
].map<Creator>((c) => {
  c.avatar = c.avatar || getAvatarUrlByGithubName(c.username)
  return c as Creator
})

export const creatorNames = creators.map(c => c.name)
export const creatorUsernames = creators.map(c => c.username || '')
