export function initShaders(gl,vsSource,fsSource){
    // 创建程序对象
    const program = gl.createProgram(); 
    // 创建着色器对象
    const vertexShader = loadShader(gl,gl.VERTEX_SHADER,vsSource); 
    const fragmentShader = loadShader(gl,gl.FRAGMENT_SHADER,fsSource);
    // 把着色器对象装载到程序对象中
    gl.attachShader(program,vertexShader); 
    gl.attachShader(program,fragmentShader);
    // 连接webgl上下文对象和程序对象
    gl.linkProgram(program);
    // 启用程序对象
    gl.useProgram(program);
    // 将程序对象挂到上下文对象上（不写这一步也可以，这里是后续要用到program 挂载到gl上方便获取）
    gl.program = program;
    return true
}

function loadShader(gl,type,source){
    // 根据着色器类型，建立着色器对象
    const shader = gl.createShader(type)
    // 将着色器文件传入着色器对象中
    gl.shaderSource(shader,source)
    // 编译着色器对象
    gl.compileShader(shader)
    // 返回着色器对象
    return shader;
}