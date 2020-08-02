liftA=0
liftB=7
t=int(input())
for _ in range(t):
    call=int(input())
    if(abs(liftA-call)<abs(liftB-call)):
        print("A")
        liftA=call
    elif(abs(liftA-call)>abs(liftB-call)):
        print("B")
        liftB=call
    else:
        if(liftA<liftB):
            print("A")
            liftA=call
        else:
            print("B")
            liftB=call
