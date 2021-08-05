'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  // async index() {
  //   const { ctx } = this;
  //   ctx.body = 'hi, egg';
  // }
  // http://127.0.0.1:7001/user?id=儿子
  // async user() {
  //   const { ctx } = this;
  //   const { id } = ctx.query;
  //   ctx.body = `hi, ${id}`;
  // }
  // http://127.0.0.1:7001/userid/儿子
  async userid() {
    const { ctx } = this;
    const { id } = ctx.params;
    ctx.body = `hi, ${id}`;
  }

  async add() {
    const { ctx } = this;
    const { title } = ctx.request.body;
    console.log(ctx.request.body);
    // MIME x-wwww-form-urlencoded
    // Egg 框架内置了 bodyParser 中间件来对 POST 请求 body 解析成 object 挂载到 ctx.request.body 上
    ctx.body = {
      title,
    };
  }

  async user() {
    const { ctx } = this;
    const result = await ctx.service.home.user();
    ctx.body = result;
  }

  async index() {
    const { ctx } = this;
    // ctx.render 默认会去 view 文件夹寻找 index.html，这是 Egg 约定好的。
    await ctx.render('index.html', {
      title: '哈哈哈', // 将 title 传入 index.html
    });
  }

  async addUser() {
    const { ctx } = this;
    console.log(123456);
    const { name } = ctx.request.body;
    try {
      await ctx.service.home.addUser(name);
      ctx.body = {
        code: 200,
        msg: '添加成功',
        data: null,
      };
    } catch (error) {
      console.log(error);
      ctx.body = {
        code: 200,
        msg: '添加失败',
        data: null,
      };
    }
  }
  async editUser() {
    const { ctx } = this;
    const { id, name } = ctx.request.body;
    try {
      await ctx.service.home.editUser(id, name);
      ctx.body = {
        code: 200,
        msg: '修改成功',
        data: null,
      };
    } catch (error) {
      ctx.body = {
        code: 200,
        msg: '修改失败',
        data: null,
      };
    }
  }

  // 删除
  async deleteUser() {
    const { ctx } = this;
    const { id } = ctx.request.body;
    try {
      await ctx.service.home.deleteUser(id);
      ctx.body = {
        code: 200,
        msg: '删除成功',
        data: null,
      };
    } catch (error) {
      ctx.body = {
        code: 500,
        msg: '删除失败',
        data: null,
      };
    }
  }
}

module.exports = HomeController;
