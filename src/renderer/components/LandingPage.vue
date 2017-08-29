<template>
  <div id="wrapper">
    <main>
      <Row>
        <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
          <FormItem prop="text">
            <Input placeholder="请输入账号" type="text"></Input>
          </FormItem>
          <FormItem prop="passwd">
            <Input placeholder="请输入密码" type="password"></Input>
          </FormItem>
          <FormItem>
            <Button type="primary" @click="handleSubmit('formCustom')">登陆</Button>
          </FormItem>
        </Form>
      </Row>
    </main>
  </div>
</template>

<script>
export default {
  name: 'landing-page',
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('提交成功!')
        } else {
          this.$Message.error('表单验证失败!')
        }
      })
    },
    handleReset (name) {
      this.$refs[name].resetFields()
    }
  }
}
</script>

<style>
Row {
  text-align: center;
}

Form {
  margin-top: 80px;
}
</style>
