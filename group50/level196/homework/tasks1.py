# Persistent Bugger.

def persistence(n):
    res=0
    nums=[n,]
    multi=1
    
    for i in nums:
        if len(str(i))==1:
            return res
        
        else:
            for char in str(i):
                multi=multi*int(char)
            nums.append(multi)
            res+=1
            multi=1

persistence(39) # 3
persistence(4) # 0


