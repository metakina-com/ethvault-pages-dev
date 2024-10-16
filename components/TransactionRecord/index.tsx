"use client";
import React, { useState, useEffect } from "react";
import { Empty, List } from "antd";
import { useActiveAccount } from "thirdweb/react";
import styles from "./index.module.scss";
import { formatTimestamp, formatWei } from "../../public/utils";

interface Props {
  Data?: Array<any>;
}
const Commonform = ({ Data }: Props) => {
  const dataLength = Data || [];
  return (
    <div className={styles.Content}>
      <div>
        <div className={styles.ComputingPower}>
          <div
            style={{
              width: "30%",
            }}
            className={styles.AmountReceived}
          >
            类型
          </div>
          <div
            style={{
              width: "30%",
            }}
            className={styles.AmountReceived}
          >
            数量
          </div>
          <div
            style={{
              width: "40%",
            }}
            className={styles.AmountReceived}
          >
            状态
          </div>
        </div>

        <div className={styles.CustomerInformation}>
          {dataLength.length > 0 ? (
            <div
              id="scrollableDiv"
              style={{
                height: 250,
                overflow: "auto",
                padding: "0 5px",
                fontSize: "18px",
                color: "#FFFFFF",
              }}
            >
              <List
                dataSource={dataLength}
                renderItem={(item: any, index: number) => (
                  <List.Item key={index}>
                    <div className={styles.ComputingPowercont}>
                      <div
                        style={{
                          width: "30%",
                        }}
                      >
                        {item["isPrincipal"]?'本金':'利息'}
                      </div>
                      <div
                        style={{
                          width: "30%",
                        }}
                      >
                        {Number(formatWei(item["amount"])).toFixed(3)}
                      </div>
                      <div
                        style={{
                          width: "40%",
                        }}
                      >
                        {item["approved"]?'提现成功':'待批准'}
                      </div>
                    </div>
                  </List.Item>
                )}
              />
            </div>
          ) : (
            <Empty
              description={<span style={{ color: "#FFFFFF" }}>暂无数据</span>}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Commonform;
