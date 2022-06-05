library(tidyverse)
library(gridExtra)
library(DataExplorer)
library(car)
library(nortest)
library(lmtest)
library(corrplot)
library(psych)
library(PerformanceAnalytics)
library(mltools)
library(data.table)
library(binaryLogic)
library(stringr)
library(caret)
library(PerformanceAnalytics)

df=read.csv(file ="coronary_prediction.csv")
str(df)


# 심질환 데이터

# male : 성별

# age : 나이
# education : 최고학력
# currentSmoker : 최근 담배를 피었는가 여부
# cigsPerDay : 하루에 피운 담배 수
# BPMeds : 혈압약 복용 여부
# prevalentStroke : 뇌졸중 기록
# prevalentHyp : 고혈압 기록
# diabetes : 당뇨병 기록
# totChol : 콜레스테롤 단계
# sysBP - 혈압 수준입니다.
# diaBP - 확장기 혈압입니다.
# BMI - 체질량 지수
# heartRate - 심박수 판독값입니다.
# gluscose - 포도당 수치입니다.
# TenYearCHD - 향후 10년 내에 관상동맥 질환의 위험을 겪을 수 있는지 여부입니다.

perf_eval = function(cm){
  # true positive rate
  TPR = Recall = cm[2,2]/sum(cm[2,])
  # precision
  Precision = cm[2,2]/sum(cm[,2])
  # true negative rate
  TNR = cm[1,1]/sum(cm[1,])
  # accuracy
  ACC = sum(diag(cm)) / sum(cm)
  # balance corrected accuracy (geometric mean)
  BCR = sqrt(TPR*TNR)
  # f1 measure
  F1 = 2 * Recall * Precision / (Recall + Precision)
  
  re <- data.frame(TPR = TPR,
                   Precision = Precision,
                   TNR = TNR,
                   ACC = ACC,
                   BCR = BCR,
                   F1 = F1)
  return(re)
}
summary(df)

#결측치 확인 및 대체
colSums(is.na(x = df))

boxplot(df$education,main = 'education')
boxplot(df$cigsPerDay,main = 'CigsperDay')
boxplot(df$BPMeds,main = 'BPMeds')
boxplot(df$totChol,main = 'totChol')
boxplot(df$BMI,main = 'BMI')
boxplot(df$heartRate,main = 'heartrate')
boxplot(df$glucose,main = 'glucose')

summary(df)

df$education=ifelse(is.na(df$education),mean(df$education,na.rm=TRUE),df$education)
df$BPMeds=ifelse(is.na(df$BPMeds),median(df$BPMeds,na.rm=TRUE),df$BPMeds)
df$cigsPerDay=ifelse(is.na(df$cigsPerDay),median(df$cigsPerDay,na.rm=TRUE),df$cigsPerDay)
df$totChol=ifelse(is.na(df$totChol),median(df$totChol,na.rm=TRUE),df$totChol)
df$heartRate=ifelse(is.na(df$heartRate),mean(df$heartRate,na.rm=TRUE),df$heartRate)
df$BMI=ifelse(is.na(df$BMI),mean(df$BMI,na.rm=TRUE),df$BMI)
df$glucose=ifelse(is.na(df$glucose),mean(df$glucose,na.rm=TRUE),df$glucose)

summary(df)

#상관관계 시각화
df_cor=cor(df)
corrplot(df_cor,method = "number")
corrplot(df_cor, method ="circle") 




summary(df)






#범주형으로 변환
df$male=as.factor(df$male)
df$education=as.factor(df$education)
df$currentSmoker=as.factor(df$currentSmoker)
df$BPMeds=as.factor(df$BPMeds)
df$prevalentStroke=as.factor(df$prevalentStroke)
df$prevalentHyp=as.factor(df$prevalentHyp)
df$diabetes=as.factor(df$diabetes)
#df$TenYearCHD=as.factor(df$TenYearCHD)

describe(df)

summary(df$TenYearCHD)

#데이터 스플릿
set.seed(2022)
train_id=sample(1:nrow(df),round(nrow(df)*0.7))
df_train=df[train_id,]
df_test=df[-train_id,]

dim(df_train)
dim(df_test)



#회귀 모형 구축
model = glm(TenYearCHD~., df_train, family = binomial())
summary(model)



#회귀모델 예측 수행
probs =predict(model,newdata=df_test,type="response")
y_pred=ifelse(probs>0.5,1,0)
cf=table(df_test$TenYearCHD,y_pred)
cf

perf_eval(cf)



#전진 선택법
model_fwd <- step(glm(TenYearCHD ~ 1, df_train, 
                      family = binomial()), 
                  direction = "forward", trace = 0,
                  scope = formula(model))
summary(model_fwd)
#m=glm(TenYearCHD~age+sysBP+cigsPerDay+male+glucose+prevalentHyp+prevalentStroke+totChol,df_test,family = binomial())


probs =predict(model_fwd,newdata=df_test,type="response")
y_pred=ifelse(probs>0.5,1,0)
cf_fwd=table(df_test$TenYearCHD,y_pred)
cf_fwd
perf_eval(cf_fwd)



#backward 변수 선택법
model_bwd <- step(glm(TenYearCHD ~ 1, df_train, 
                      family = binomial()), 
                  direction = "backward", trace = 0,
                  scope = formula(model))



probs =predict(model_bwd,newdata=df_test,type="response")
y_pred=ifelse(probs>0.3,1,0)
cf_backwrd=table(df_test$TenYearCHD,y_pred)
cf_backwrd
perf_eval(cf_backwrd)


#stepwise 변수 선택법
model_step <- step(glm(TenYearCHD ~ 1, df_train, 
                      family = binomial()), 
                  direction = "both", trace = 0,
                  scope = list(lower=TenYearCHD ~ 1, upper = formula(model)))


probs =predict(model_step,newdata=df_test,type="response")
y_pred=ifelse(probs>0.5,1,0)
cf_step=table(df_test$TenYearCHD,y_pred)
cf
perf_eval(cf_step)


perf_eval(cf)
perf_eval(cf_fwd)
perf_eval(cf_backwrd)
perf_eval(cf_step)



#이상치 검출 및 대체
boxplot(df[0:5],outline = T)$stats
df$cigsPerDay=ifelse(df$cigsPerDay>50,round(median(df$cigsPerDay,na.rm=TRUE),2),df$cigsPerDay)
boxplot(df[6:10],outline = T)$stats
df$totChol=ifelse(df$totChol>342 | df$totChol<124,round(median(df$totChol,na.rm=TRUE),2),df$totChol)
boxplot(df[11:15],outline = T)$stats
df$sysBP=ifelse(df$sysBP>177 | df$sysBP<83,round(mean(df$sysBP,na.rm=TRUE),2),df$sysBP)
df$diaBP=ifelse(df$diaBP>110 | df$diaBP<54,round(mean(df$diaBP,na.rm=TRUE),2),df$diaBP)
df$BMI=ifelse(df$BMI>35 | df$BMI<16,round(mean(df$BMI,na.rm=TRUE),2),df$BMI)
df$heartRate=ifelse(df$heartRate>103 | df$heartRate<47,round(mean(df$heartRate,na.rm=TRUE),2),df$heartRate)
df$glucose=ifelse(df$glucose>99 | df$glucose<56,round(mean(df$glucose,na.rm=TRUE),2),df$glucose)


