file_handle=open('menu.txt',mode='w')
file_handle.write('<site_menu> \n')
for num in range(1,292):
    file_handle.write('<site_node><number>%d</number><URL>Comic.html?id=%04d;name=walk</URL></site_node> \n'%(num,num))
file_handle.write('</site_menu> \n')
file_handle.close()
