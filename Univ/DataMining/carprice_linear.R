library(tidyverse)
library(gridExtra)
library(DataExplorer)
library(car)
library(nortest)
library(lmtest)

setwd("C:\\Users\\An Tae-Hyun\\Desktop\\Pythonworkspace\\Univ\\DataMining")
dat<-read.csv(file = "CarPrice_Assignment.csv",header=T)
head(dat)
str(dat)
summary(dat)
dat=subset(dat,select=c(symboling,fueltype,aspiration,doornumber,carbody,drivewheel, enginelocation
                       ,wheelbase,carlength,carwidth,carheight,curbweight,enginetype,cylindernumber,enginesize
                        ,fuelsystem,boreratio,stroke,compressionratio,horsepower,peakrpm,citympg,highwaympg,price))

str(dat)

len=ncol(dat)
for(i in len){
  if(class(dat[,i])=="character"){
    dat[,i]=as.factor(dat[,i])
  }
}
str(dat)
#symboling은 위험도 지수 -3~3까지

dat[["fueltype"]]=as.factor(dat[["fueltype"]])
dat[["aspiration"]]=as.factor(dat[["aspiration"]])
dat[["doornumber"]]=as.factor(dat[["doornumber"]])
dat[["carbody"]]=as.factor(dat[["carbody"]])
dat[["drivewheel"]]=as.factor(dat[["drivewheel"]])
dat[["enginelocation"]]=as.factor(dat[["enginelocation"]])
dat[["enginetype"]]=as.factor(dat[["enginetype"]])
dat[["cylindernumber"]]=as.factor(dat[["cylindernumber"]])
dat[["fuelsystem"]]=as.factor(dat[["fuelsystem"]])
str(dat)

dat[["fuelsystem"]]

