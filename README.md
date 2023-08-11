# Bitcoin Payment Terminal 💸
<i>Disclaimer : It's just a frontend, no backend. </i>

This is a smarter **bitcoin payment terminal** that **updates** the price of the transaction **based on the actual price of bitcoin**. It doesn't actually make the transaction.

## The Why ✔️

This solves the problem of **Bitcoin's volatility** when selling/buying something in Bitcoin. It also avoids the need to use security funds to compensate customers for the loss of Bitcoin in a transaction due to volatility.

For example, let's say a seller want to sell something for $1 to one of his customer in BTC. Imagine that bitcoin increases suddenly. As a result of this increase, the bitcoin price he is offering is probably not in line with the real price of bitcoin. And so it is as if he has sold his product for less than $1.

Generally, to avoid this, there are security funds that can compensate for these losses. Here I present my approach to solve this problem.

## What does it look like ✨

![](bit.gif)

As you can see, when I refresh the page, the price of bitcoin updates. So the price adapts to the actual Bitcoin Price. 

## How to use it ⚒️

- Download the folder on an empty file
- Open the ```pay.html``` file
- In our case, the transaction is $10 as we can see it here:
```
<body id="body" ng-init="stdbtc=1;stdusd=0;_btc=10;">
```
- If you want to change the value of the transaction, you just have to change the value of the ```_btc```
## Acknowledgement 🙏

It was mainly made possible due to this repo that inspired me a lot :  [USD-BTC-Converter](https://github.com/ManuelVargas1251/USD-BTC-Converter) made by @ManuelVargas1251

## Contribution

Whatever you want, idea, suggestions, corretions, improvements... :)
