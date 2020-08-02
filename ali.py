a=input()
if(a[2] =='A' or a[2]=='E'or a[2]=='I' or a[2]=='O'or a[2]=='U'or a[2]=='Y'):
    print("invalid")
elif (int(a[0])+int(a[1]))%2==0 and (int(a[3])+int(a[4]))%2==0 and (int(a[4])+int(a[5]))%2==0 and (int(a[7])+int(a[8]))%2==0:
    print("valid")
else:
    print('invalid')
