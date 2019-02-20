import os
import shutil

def copyPNG(i):
    addressPNG = "F:/FantasyWalker/第%d话/"%(i)

    f_list = os.listdir(addressPNG)
    n=0
    
    for fileNAME in f_list:

        if os.path.splitext(fileNAME)[1] == '.png':
            n += 1
            
            oldname = u"F:\\FantasyWalker\\第%d话\\%s" %(i,fileNAME)
            newname = u"E:\\qqwqqk\\GitHub\\qqwqqk.github.io\\URL_Walk\\images\\Chapter%d\\%s" %(i,fileNAME)
            #print(oldname)
            #print(newname)
            shutil.copyfile(oldname, newname)
            #print(str(n)+'.'+'已复制'+fileNAME)
            #print("第%d册 第%d话 %s 已复制"%(p,i,fileNAME))

    return n


if __name__ == '__main__':
    index = 1
    pause = 291
    #print (index,pause)
    while index <= pause:
        try:
            page = copyPNG(index)
            if page!=8:
                print("第%d话 共%d页 内容非正常规格"%(index,page))
            else:
                print("第%d话 复制完成"%(index))
            index = index + 1
        except:
            print("第%d话 复制失败"%(index))
            break
