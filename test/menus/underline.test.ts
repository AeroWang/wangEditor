/**
 * @description underline test
 * @author dyl
 */

import createEditor from '../fns/create-editor'
import Editor from '../../src/editor'
import Underline from '../../src/menus/underline/index'
import mockCmdFn from '../fns/command-mock'
import { getMenuInstance } from '../fns/menus'

let editor: Editor
let underlineMenu: Underline

test('加粗', () => {
    editor = createEditor(document, 'div1') // 赋值给全局变量

    // 找到 bold 菜单
    underlineMenu = getMenuInstance(editor, Underline) as Underline

    // 执行点击事件，模拟加粗
    mockCmdFn(document)
        ; (underlineMenu as Underline).clickHandler()
    expect(document.execCommand).toBeCalledWith('underline', false, undefined) // mock fn 被调用
})
