# encoding:utf-8
import os
import shutil

def xmllist(i):
    file_path = "F:/jtjf/walk%04d.xml" % (i)
    file_handle=open(file_path, mode='w')
    file_handle.write('<section> \n')

    addressPNG = "F:/FantasyWalker/第%d话/"%(i)

    f_list = os.listdir(addressPNG)
    n=0
    for fileNAME in f_list:

        if os.path.splitext(fileNAME)[1] == '.png':
            n += 1
            str1 = u"\t<img><id>%d</id><url>images/Chapter%d/%s</url></img> \n" %(n,i,fileNAME)
            #print(str1)
            #str2 = str1.encode('utf-8')
            #print(str2)
            file_handle.write("%s" %(str1)) 

    file_handle.write('</section> \n')
    file_handle.close()
    return n


if __name__ == '__main__':
    
    for num in range(1,292):
        try:
            page = xmllist(num)
            if page!=8:
                print("第%d话 共%d页 内容非正常规格"%(num,page))
            else:
                print("第%d话 转换完成"%(num))
        except:
            print("第%d话 转换失败"%(num))
            break
